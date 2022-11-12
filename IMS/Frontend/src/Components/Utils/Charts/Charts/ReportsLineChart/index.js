import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "../../../../../helpers/axios";



export const options = {
  title: "Annual Finance Report",
  subtitle:"Revenue generated by scrap and resell",
  hAxis: { title: "Months", titleTextStyle: { color: "#333" } },
//   vAxis: { title: "Amount (in Rs.)", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "80%", height: "80%" },
  colors:['#C62828','#1565C0']
};

export default function App() {
  
  const [JanMaintenanceExpence, setJanMaintenanceExpence] = useState("");
  const [FebMaintenanceExpence, setFebMaintenanceExpence] = useState("");
  const [MarMaintenanceExpence, setMarMaintenanceExpence] = useState("");
  const [AprMaintenanceExpence, setAprMaintenanceExpence] = useState("");
  const [MayMaintenanceExpence, setMayMaintenanceExpence] = useState("");
  const [JunMaintenanceExpence, setJunMaintenanceExpence] = useState("");
  const [JulMaintenanceExpence, setJulMaintenanceExpence] = useState("");
  const [AugMaintenanceExpence, setAugMaintenanceExpence] = useState("");
  const [SepMaintenanceExpence, setSepMaintenanceExpence] = useState("");
  const [OctMaintenanceExpence, setOctMaintenanceExpence] = useState("");
  const [NovMaintenanceExpence, setNovMaintenanceExpence] = useState("");
  const [DecMaintenanceExpence, setDecMaintenanceExpence] = useState("");

  const [JanProductExpence, setJanProductExpence] = useState("");
  const [FebProductExpence, setFebProductExpence] = useState("");
  const [MarProductExpence, setMarProductExpence] = useState("");
  const [AprProductExpence, setAprProductExpence] = useState("");
  const [MayProductExpence, setMayProductExpence] = useState("");
  const [JunProductExpence, setJunProductExpence] = useState("");
  const [JulProductExpence, setJulProductExpence] = useState("");
  const [AugProductExpence, setAugProductExpence] = useState("");
  const [SepProductExpence, setSepProductExpence] = useState("");
  const [OctProductExpence, setOctProductExpence] = useState("");
  const [NovProductExpence, setNovProductExpence] = useState("");
  const [DecProductExpence, setDecProductExpence] = useState("");

  const [JanResellRevenue, setJanResellRevenue] = useState("");
  const [FebResellRevenue, setFebResellRevenue] = useState("");
  const [MarResellRevenue, setMarResellRevenue] = useState("");
  const [AprResellRevenue, setAprResellRevenue] = useState("");
  const [MayResellRevenue, setMayResellRevenue] = useState("");
  const [JunResellRevenue, setJunResellRevenue] = useState("");
  const [JulResellRevenue, setJulResellRevenue] = useState("");
  const [AugResellRevenue, setAugResellRevenue] = useState("");
  const [SepResellRevenue, setSepResellRevenue] = useState("");
  const [OctResellRevenue, setOctResellRevenue] = useState("");
  const [NovResellRevenue, setNovResellRevenue] = useState("");
  const [DecResellRevenue, setDecResellRevenue] = useState("");


  const [JanScrapRevenue, setJanScrapRevenue] = useState("");
  const [FebScrapRevenue, setFebScrapRevenue] = useState("");
  const [MarScrapRevenue, setMarScrapRevenue] = useState("");
  const [AprScrapRevenue, setAprScrapRevenue] = useState("");
  const [MayScrapRevenue, setMayScrapRevenue] = useState("");
  const [JunScrapRevenue, setJunScrapRevenue] = useState("");
  const [JulScrapRevenue, setJulScrapRevenue] = useState("");
  const [AugScrapRevenue, setAugScrapRevenue] = useState("");
  const [SepScrapRevenue, setSepScrapRevenue] = useState("");
  const [OctScrapRevenue, setOctScrapRevenue] = useState("");
  const [NovScrapRevenue, setNovScrapRevenue] = useState("");
  const [DecScrapRevenue, setDecScrapRevenue] = useState("");

  
 


  useEffect(() => {
    
    const getProductExpense = async () => {

      const res = await axios.get(`/product/getMonthsTotal`);
      setDecProductExpence(res.data.DecProductExpence);
      setNovProductExpence(res.data.NovProductExpence);
      setOctProductExpence(res.data.OctProductExpence);
      setSepProductExpence(res.data.SepProductExpence);
      setAugProductExpence(res.data.AugProductExpence);
     
      setJulProductExpence(res.data.JulProductExpence);
      setJunProductExpence(res.data.JunProductExpence);
      setMayProductExpence(res.data.MayProductExpence);
      setAprProductExpence(res.data.AprProductExpence);
      setMarProductExpence(res.data.MarProductExpence);
      setFebProductExpence(res.data.FebProductExpence);
      setJanProductExpence(res.data.JanProductExpence);

     
 
    };
    const getMaintenanceExpense = async () => {

      const res = await axios.get(`/maintenance/getMonthsmaintenance`);
      setDecMaintenanceExpence(res.data.DecMaintenanceExpence);
      setNovMaintenanceExpence(res.data.NovMaintenanceExpence);
      setOctMaintenanceExpence(res.data.OctMaintenanceExpence);
      setSepMaintenanceExpence(res.data.SepMaintenanceExpence);
      setAugMaintenanceExpence(res.data.AugMaintenanceExpence);
     
      setJulMaintenanceExpence(res.data.JulMaintenanceExpence);
      setJunMaintenanceExpence(res.data.JunMaintenanceExpence);
      setMayMaintenanceExpence(res.data.MayMaintenanceExpence);
      setAprMaintenanceExpence(res.data.AprMaintenanceExpence);
      setMarMaintenanceExpence(res.data.MarMaintenanceExpence);
      setFebMaintenanceExpence(res.data.FebMaintenanceExpence);
      setJanMaintenanceExpence(res.data.JanMaintenanceExpence);

     
 
    };
    const getScrapRevenue = async () => {

      const res = await axios.get(`/scrap/getMonthsscrap`);
      setDecScrapRevenue(res.data.DecScrapRevenue);
      setNovScrapRevenue(res.data.NovScrapRevenue);
      setOctScrapRevenue(res.data.OctScrapRevenue);
      setSepScrapRevenue(res.data.SepScrapRevenue);
      setAugScrapRevenue(res.data.AugScrapRevenue);
     
      setJulScrapRevenue(res.data.JulScrapRevenue);
      setJunScrapRevenue(res.data.JunScrapRevenue);
      setMayScrapRevenue(res.data.MayScrapRevenue);
      setAprScrapRevenue(res.data.AprScrapRevenue);
      setMarScrapRevenue(res.data.MarScrapRevenue);
      setFebScrapRevenue(res.data.FebScrapRevenue);
      setJanScrapRevenue(res.data.JanScrapRevenue);
    
 
    };
    const getResellRevenue = async () => {

      const res = await axios.get(`/resell/getMonthsResell`);
      
      setDecResellRevenue(res.data.DecResellRevenue);
      setNovResellRevenue(res.data.NovResellRevenue);
      setOctResellRevenue(res.data.OctResellRevenue);
      setSepResellRevenue(res.data.SepResellRevenue);
      setAugResellRevenue(res.data.AugResellRevenue);
     
      setJulResellRevenue(res.data.JulResellRevenue);
      setJunResellRevenue(res.data.JunResellRevenue);
      setMayResellRevenue(res.data.MayResellRevenue);
      setAprResellRevenue(res.data.AprResellRevenue);
      setMarResellRevenue(res.data.MarResellRevenue);
      setFebResellRevenue(res.data.FebResellRevenue);
      setJanResellRevenue(res.data.JanResellRevenue);
    
 
    };
    
    getProductExpense();
    getMaintenanceExpense();
    getResellRevenue();
    getScrapRevenue();
    
    
  },[])
  let JanTotalRevenue = JanResellRevenue+ JanScrapRevenue;
  let FebTotalRevenue = FebResellRevenue + FebScrapRevenue;
  let MarTotalRevenue = MarResellRevenue + MarScrapRevenue;
  let AprTotalRevenue = AprResellRevenue + AprScrapRevenue;
  let MayTotalRevenue = MayResellRevenue + MayScrapRevenue;
  let JunTotalRevenue = JunResellRevenue + JunScrapRevenue;
  let JulTotalRevenue = JulResellRevenue + JulScrapRevenue;
  let AugTotalRevenue = AugResellRevenue + AugScrapRevenue;
  let SepTotalRevenue = SepResellRevenue + SepScrapRevenue;
  let OctTotalRevenue = OctResellRevenue + OctScrapRevenue;
  let NovTotalRevenue = NovResellRevenue + NovScrapRevenue;
  let DecTotalRevenue = DecResellRevenue + DecScrapRevenue;

  let JanTotalExpence = JanMaintenanceExpence+ JanProductExpence;
  let FebTotalExpence = FebMaintenanceExpence + FebProductExpence;
  let MarTotalExpence = MarMaintenanceExpence +MarProductExpence;
  let AprTotalExpence = AprMaintenanceExpence + AprProductExpence;
  let MayTotalExpence = MayMaintenanceExpence + MayProductExpence;
  let JunTotalExpence = JunMaintenanceExpence + JunProductExpence;
  let JulTotalExpence = JulMaintenanceExpence + JulProductExpence;
  let AugTotalExpence = AugMaintenanceExpence + AugProductExpence;
  let SepTotalExpence = SepMaintenanceExpence + SepProductExpence;
  let OctTotalExpence = OctMaintenanceExpence + OctProductExpence;
  let NovTotalExpence = NovMaintenanceExpence + NovProductExpence;
  let DecTotalExpence = DecMaintenanceExpence + DecProductExpence

  const data = [
    ["Month", "Revenue", "Expenses"],
    ["January",JanTotalRevenue,JanTotalExpence],
    ["February",FebTotalRevenue,FebTotalExpence],
    ["March",MarTotalRevenue,MarTotalExpence],
    ["April",AprTotalRevenue,AprTotalExpence],
    ["May",MayTotalRevenue,MayTotalExpence],
    ["June",JunTotalRevenue,JunTotalExpence],
    ["July",JulTotalRevenue,JulTotalExpence],
    ["August",AugTotalRevenue,AugTotalExpence],
    ["September",SepTotalRevenue,SepTotalExpence],
    ["October",OctTotalRevenue,OctTotalExpence],
    ["November",NovTotalRevenue,NovTotalExpence],
    ["December",DecTotalRevenue,DecTotalExpence]
]; 
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
