var express = require('express');
var app = express();
var path = require('path');
var timesyncServer = require('timesync/server');
var server = require('http').createServer(app);
io = require('socket.io').listen(server);
const fs = require('fs');
const PORT = process.env.PORT || 5000
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/private')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));
// TIMESYNC SERVER -------------- >
app.use('/timesync', timesyncServer.requestHandler);
//<editor-fold> << SOCKET IO >> -------------------------------------------- //
io.on('connection', function(socket) {
  //<editor-fold> << sf003 >> --------------------------------------------- //
  //<editor-fold>  < START PIECE >                         //
  socket.on('sf003_startpiece', function(data) {
    socket.broadcast.emit('sf003_startpiecebroadcast', {});
    socket.emit('sf003_startpiecebroadcast', {});
  });
  //</editor-fold> END START PIECE END
  //<editor-fold>  < STOP >                                //
  socket.on('sf003_stop', function(data) {
    socket.emit('sf003_stopBroadcast', {});
    socket.broadcast.emit('sf003_stopBroadcast', {});
  });
  //</editor-fold> END STOP END
  //<editor-fold>  < PAUSE >                               //
  socket.on('sf003_pause', function(data) {
    socket.emit('sf003_pauseBroadcast', {
      pauseState: data.pauseState,
      pauseTime: data.pauseTime
    });
    socket.broadcast.emit('sf003_pauseBroadcast', {
      pauseState: data.pauseState,
      pauseTime: data.pauseTime
    });
  });
  //</editor-fold> END PAUSE END
  //<editor-fold>  < sf003_saveScoreToServer >             //
  socket.on('sf003_saveScoreToServer', function(data) {
    var fileName = data.pieceData[0];
    var pieceData = data.pieceData[1];
    var pathStr = "/public/pieces/sf003/savedScoreData/" + fileName;
    var filePath = path.join(__dirname, pathStr);
    fs.writeFile(filePath, pieceData, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  });
  //</editor-fold> END sf003_saveScoreToServer END
  //<editor-fold>  < LOAD PIECE FROM SERVER >              //
  // Request for load piece from splash page
  socket.on('sf003_loadPieceFromServer', function(data) {
    //joining path of directory
    const directoryPath = path.join(__dirname, 'public/pieces/sf003/savedScoreData');
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function(err, files) {
      //handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      //Send list of files in directory to Splash page
      socket.broadcast.emit('sf003_loadPieceFromServerBroadcast', {
        availableScoreData: files
      });
      socket.emit('sf003_loadPieceFromServerBroadcast', {
        availableScoreDataFiles: files
      });
    });
  });
  //</editor-fold> END LOAD PIECE FROM SERVER END
  //</editor-fold> >> END sf003 END  //////////////////////////////////////////
}); // End Socket IO
//</editor-fold> >> END SOCKET IO END  ////////////////////////////////////////
