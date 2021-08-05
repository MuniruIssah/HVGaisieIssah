import React,{useState} from "react";
import "./styles.css";
import excel from '../../../../../../assets/excel.png'
import DataListExportModal from "../../../../../DataListExportModal/DataListExportModal";
const ExportButton = () => {
const [visible, setVisible] = useState(false)
  return (
    <>
    <button className="exportButton" onClick={()=>setVisible(true)}>
      <span>Export</span>
      <div className="eBIcon" style={{ backgroundImage: `url(${excel})`, }}></div>
    </button>
    <DataListExportModal visible={visible} onClose={()=>setVisible(false)} />
    </>
  );
};

export default ExportButton;
