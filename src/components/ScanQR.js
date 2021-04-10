import React, { useState } from "react";
import QrReader from "react-qr-reader";

function ScanQR(props) {
  const [scanResultWebCam, setScanResultWebCam] = useState("");

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  return (
    <div className="scanqr container">
      <div className="w-100">
        <h3>Qr Code Scan by Web Cam</h3>
        <QrReader
          delay={300}
          style={{ width: "100%" }}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
        />
        <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
      </div>
    </div>
  );
}

export default ScanQR;
