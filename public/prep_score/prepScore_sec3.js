const SVG_NS = "http://www.w3.org/2000/svg";
const PX_PER_SEC = 14;

//1200 x 927
let sec3HocketPlrs = [14, 12, 10, 15, 8];
let sec3CresPlrs = [7, 13, 0, 4, 1];
let sec3accelPlrs = [3, 9, 5, 6, 11, 2];

for (let partNum = 15; partNum >= 0; partNum--) {
  let prtCanvas = document.createElementNS(SVG_NS, "svg");
  prtCanvas.setAttributeNS(null, "width", 2400);
  prtCanvas.setAttributeNS(null, "height", 100);
  prtCanvas.setAttributeNS(null, "id", 'canvas' + partNum);
  prtCanvas.style.backgroundColor = "transparent";
  document.body.appendChild(prtCanvas);
  let partRect = document.createElementNS(SVG_NS, "rect");
  partRect.setAttributeNS(null, "width", 2400);
  partRect.setAttributeNS(null, "height", 100);
  partRect.setAttributeNS(null, "id", 'rect' + partNum);
  partRect.setAttributeNS(null, "fill", "white");
  partRect.setAttributeNS(null, "stroke", "black");
  partRect.setAttributeNS(null, "stroke-width", "2");
  prtCanvas.appendChild(partRect);
  //sec 3 hocket
  sec3HocketPlrs.forEach((hocketPlrNum, plix) => {
    if (partNum == hocketPlrNum) {
      for (let tix = 0; tix < sec3HocketData[plix].length; tix++) {
        sec3HocketData[plix].forEach((sequence, seqIx) => {
          let lineClr;
          let lineClrToggle = seqIx % 2;
          lineClrToggle == 0 ? lineClr = 'black' : lineClr = '#708090'
          sequence.forEach((time) => {
            let articulationLine = document.createElementNS(SVG_NS, "line");
            let x1 = (time - 345.1721644860251) * PX_PER_SEC;
            articulationLine.setAttributeNS(null, "x1", x1);
            articulationLine.setAttributeNS(null, "x2", x1);
            articulationLine.setAttributeNS(null, "y1", 0);
            articulationLine.setAttributeNS(null, "y2", 100);
            articulationLine.setAttributeNS(null, "stroke-width", "1");
            articulationLine.setAttributeNS(null, "stroke", lineClr);
            prtCanvas.appendChild(articulationLine);

          });
        });
      }

    }

  });
  //sec 3 cres
  sec3CresPlrs.forEach((cresPlrNum, plrIX) => {
    if (partNum == cresPlrNum) {
      for (let cresIx = 1; cresIx < sec3CresData[plrIX].length; cresIx++) {

        let articulationLine = document.createElementNS(SVG_NS, "line");
        let x1 = (sec3CresData[plrIX][cresIx - 1] - 345.1721644860251) * PX_PER_SEC;
        let x2 = (sec3CresData[plrIX][cresIx] - 345.1721644860251) * PX_PER_SEC;
        articulationLine.setAttributeNS(null, "x1", x1);
        articulationLine.setAttributeNS(null, "x2", x2);
        articulationLine.setAttributeNS(null, "y1", 100);
        articulationLine.setAttributeNS(null, "y2", 0);
        articulationLine.setAttributeNS(null, "stroke-width", "1");
        articulationLine.setAttributeNS(null, "stroke", 'black');
        prtCanvas.appendChild(articulationLine);


        let cresStartCirc = document.createElementNS(SVG_NS, "circle");
        cresStartCirc.setAttributeNS(null, "cx", x1);
        cresStartCirc.setAttributeNS(null, "cy", 100);
        cresStartCirc.setAttributeNS(null, "r", 6);
        cresStartCirc.setAttributeNS(null, "fill", 'black');
        prtCanvas.appendChild(cresStartCirc);

      }

    }
  });

  // sec 3 Accel
  sec3accelPlrs.forEach((accelPlrNum, aplrIX) => {
    if (partNum == accelPlrNum) {
      sec3AccelData[aplrIX].forEach((sequence, seqIx) => {
        let lineClr;
        let lineClrToggle = seqIx % 2;
        lineClrToggle == 0 ? lineClr = 'black' : lineClr = '#708090'
        sequence.forEach((time) => {
          let articulationLine = document.createElementNS(SVG_NS, "line");
          let x1 = (time - 345.1721644860251) * PX_PER_SEC;
          articulationLine.setAttributeNS(null, "x1", x1);
          articulationLine.setAttributeNS(null, "x2", x1);
          articulationLine.setAttributeNS(null, "y1", 0);
          articulationLine.setAttributeNS(null, "y2", 100);
          articulationLine.setAttributeNS(null, "stroke-width", "1");
          articulationLine.setAttributeNS(null, "stroke", lineClr);
          prtCanvas.appendChild(articulationLine);

        });


      });
    }
  });

  for (let i = 0; i < 26; i++) {

    let tenSecLine = document.createElementNS(SVG_NS, "line");
    let x = i * 10 * PX_PER_SEC;
    tenSecLine.setAttributeNS(null, "x1", x);
    tenSecLine.setAttributeNS(null, "x2", x);
    tenSecLine.setAttributeNS(null, "y1", 0);
    tenSecLine.setAttributeNS(null, "y2", 4);
    tenSecLine.setAttributeNS(null, "stroke-width", "4");
    tenSecLine.setAttributeNS(null, "stroke", 'black');
    prtCanvas.appendChild(tenSecLine);
  }
}
