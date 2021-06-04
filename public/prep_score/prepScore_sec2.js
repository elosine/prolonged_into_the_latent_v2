const SVG_NS = "http://www.w3.org/2000/svg";
const PX_PER_SEC = 12.3;

//1200 x 927
  for(let seqIx=sec2Data.length-1;seqIx>=0;seqIx--){

  let prtCanvas = document.createElementNS(SVG_NS, "svg");
  prtCanvas.setAttributeNS(null, "width", 2400);
  prtCanvas.setAttributeNS(null, "height", 100);
  prtCanvas.setAttributeNS(null, "id", 'canvas' + seqIx);
  prtCanvas.style.backgroundColor = "transparent";
  document.body.appendChild(prtCanvas);
  let partRect = document.createElementNS(SVG_NS, "rect");
  partRect.setAttributeNS(null, "width", 2400);
  partRect.setAttributeNS(null, "height", 100);
  partRect.setAttributeNS(null, "id", 'rect' + seqIx);
  partRect.setAttributeNS(null, "fill", "white");
  partRect.setAttributeNS(null, "stroke", "black");
  partRect.setAttributeNS(null, "stroke-width", "2");
  prtCanvas.appendChild(partRect);

  for(let i=0;i<24;i++){

    let tenSecLine = document.createElementNS(SVG_NS, "line");
    let x= i * 10 * PX_PER_SEC;
    tenSecLine.setAttributeNS(null, "x1", x);
    tenSecLine.setAttributeNS(null, "x2", x);
    tenSecLine.setAttributeNS(null, "y1", 100);
    tenSecLine.setAttributeNS(null, "y2", 0);
    tenSecLine.setAttributeNS(null, "stroke-width", "2");
    tenSecLine.setAttributeNS(null, "stroke", 'black');
    prtCanvas.appendChild(tenSecLine);
}


  for (let cresIx = 1; cresIx < sec2Data[seqIx].length; cresIx++) {

    let articulationLine = document.createElementNS(SVG_NS, "line");
    let x1 = (sec2Data[seqIx][cresIx - 1] - 143.1551929676432) * PX_PER_SEC;
    let x2 = (sec2Data[seqIx][cresIx] - 143.1551929676432) * PX_PER_SEC;
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
