const SVG_NS = "http://www.w3.org/2000/svg";
const PX_PER_SEC = 17;

//1200 x 927
// sec1Data.forEach((partArray, partNum) => {
  for(let partNum=sec1Data.length-1;partNum>=0;partNum--){
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



  for(let i=0;i<24;i++){

    let tenSecLine = document.createElementNS(SVG_NS, "line");
    let x= i * 10 * PX_PER_SEC;
    tenSecLine.setAttributeNS(null, "x1", x);
    tenSecLine.setAttributeNS(null, "x2", x);
    tenSecLine.setAttributeNS(null, "y1", 0);
    tenSecLine.setAttributeNS(null, "y2", 4);
    tenSecLine.setAttributeNS(null, "stroke-width", "4");
    tenSecLine.setAttributeNS(null, "stroke", 'black');
    prtCanvas.appendChild(tenSecLine);
  }



  sec1Data[partNum].forEach((sequence, seqIx) => {
    let lineClr;
    let lineClrToggle = seqIx%2;
    lineClrToggle==0 ? lineClr='black' : lineClr='#708090'
    sequence.forEach((time) => {
      let articulationLine = document.createElementNS(SVG_NS, "line");
      let x1 = time*PX_PER_SEC;
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
