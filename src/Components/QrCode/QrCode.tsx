import React, {useState} from 'react'
import QrReader from 'react-qr-reader'
import '../Modal/Modal.css'
 
function QrCode({childToParent}:{childToParent : any}) {
  const [data, setData] = useState("")

 
  const handleScan = (result: React.SetStateAction<string | any>) => {
    if (result) {
      setData(result);
    }
  }
  const handleError = (err: string) => {
    console.error(err)
  }
    return (
      <div style={{ backgroundColor: 'white'}}>
        <QrReader
          delay={0}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
          className="QrCode"
        />
        {childToParent(data)}
      </div>
    )
  }

export default QrCode;