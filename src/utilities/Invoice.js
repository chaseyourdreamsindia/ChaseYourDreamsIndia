const Invoice = `<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="generator" content="PhpSpreadsheet, https://github.com/PHPOffice/PhpSpreadsheet">
    <meta name="author" content="User" />
  <style type="text/css">
    html { font-family:Calibri, Arial, Helvetica, sans-serif; font-size:11pt; background-color:white }
    a.comment-indicator:hover + div.comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em }
    a.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em }
    div.comment { display:none }
    table { border-collapse:collapse; page-break-after:always }
    .gridlines td { border:1px dotted black }
    .gridlines th { border:1px dotted black }
    .b { text-align:center }
    .e { text-align:center }
    .f { text-align:right }
    .inlineStr { text-align:left }
    .n { text-align:right }
    .s { text-align:left }
    td.style0 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    th.style0 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    td.style1 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style1 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style2 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style2 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style3 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style3 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style4 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style4 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style5 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style5 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style6 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style6 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style7 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style7 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style8 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style8 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style9 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style9 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style10 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style10 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style11 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style11 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style12 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style12 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style13 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style13 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style14 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style14 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style15 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style15 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style16 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style16 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style17 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style17 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style18 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style18 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style19 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style19 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style20 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style20 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style21 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    th.style21 { vertical-align:bottom; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    td.style22 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style22 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style23 { vertical-align:bottom; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    th.style23 { vertical-align:bottom; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    td.style24 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style24 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style25 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style25 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style26 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style26 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style27 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style27 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style28 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style28 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style29 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style29 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style30 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style30 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style31 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style31 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style32 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style32 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style33 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Rupakara'; font-size:11pt; background-color:white }
    th.style33 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Rupakara'; font-size:11pt; background-color:white }
    td.style34 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style34 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style35 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style35 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style36 { vertical-align:bottom; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    th.style36 { vertical-align:bottom; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    td.style37 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style37 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style38 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    th.style38 { vertical-align:bottom; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Calibri'; font-size:11pt; background-color:white }
    td.style39 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style39 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style40 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style40 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style41 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style41 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style42 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style42 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style43 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style43 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style44 { vertical-align:bottom; text-align:right; padding-right:0px; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style44 { vertical-align:bottom; text-align:right; padding-right:0px; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style45 { vertical-align:bottom; text-align:right; padding-right:0px; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style45 { vertical-align:bottom; text-align:right; padding-right:0px; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style46 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style46 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style47 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style47 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style48 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style48 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style49 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style49 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style50 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style50 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style51 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style51 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style52 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style52 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style53 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style53 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style54 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style54 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style55 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style55 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style56 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style56 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style57 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style57 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style58 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style58 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style59 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style59 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style60 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style60 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style61 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style61 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style62 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style62 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style63 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style63 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style64 { vertical-align:top; text-align:center; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style64 { vertical-align:top; text-align:center; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style65 { vertical-align:top; text-align:center; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style65 { vertical-align:top; text-align:center; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style66 { vertical-align:top; text-align:center; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style66 { vertical-align:top; text-align:center; border-bottom:2px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style67 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style67 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style68 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style68 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style69 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style69 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style70 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style70 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style71 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style71 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style72 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style72 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style73 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style73 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style74 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style74 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style75 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style75 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style76 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style76 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style77 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style77 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style78 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style78 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style79 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style79 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style80 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style80 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style81 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style81 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style82 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style82 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style83 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style83 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style84 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style84 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style85 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style85 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style86 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style86 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style87 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style87 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style88 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style88 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style89 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style89 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style90 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style90 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style91 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style91 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style92 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style92 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style93 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style93 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style94 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style94 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style95 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style95 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style96 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style96 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style97 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style97 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style98 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style98 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style99 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9.5pt; background-color:white }
    th.style99 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9.5pt; background-color:white }
    td.style100 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'Arial'; font-size:9.5pt; background-color:white }
    th.style100 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'Arial'; font-size:9.5pt; background-color:white }
    td.style101 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style101 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style102 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style102 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style103 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style103 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style104 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style104 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style105 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style105 { vertical-align:top; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style106 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style106 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style107 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style107 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style108 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style108 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style109 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style109 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style110 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style110 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style111 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style111 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style112 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style112 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style113 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; text-decoration:underline; color:#0563C1; font-family:'Calibri'; font-size:11pt; background-color:white }
    th.style113 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; text-decoration:underline; color:#0563C1; font-family:'Calibri'; font-size:11pt; background-color:white }
    td.style114 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style114 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style115 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style115 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style116 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style116 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style117 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style117 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style118 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style118 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style119 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style119 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style120 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style120 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style121 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style121 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style122 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style122 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style123 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style123 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style124 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style124 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style125 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style125 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style126 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style126 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style127 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style127 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style128 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style128 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style129 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style129 { vertical-align:top; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style130 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style130 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style131 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style131 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style132 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style132 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style133 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style133 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style134 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style134 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style135 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style135 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style136 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style136 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style137 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style137 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style138 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style138 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style139 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style139 { vertical-align:top; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style140 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style140 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:2px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style141 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style141 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style142 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style142 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style143 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style143 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style144 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style144 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style145 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style145 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style146 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style146 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style147 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style147 { vertical-align:top; text-align:right; padding-right:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:2px solid #000000 !important; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style148 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style148 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style149 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style149 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style150 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style150 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style151 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style151 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:2px solid #000000 !important; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style152 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style152 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style153 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style153 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style154 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style154 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style155 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style155 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style156 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style156 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style157 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style157 { vertical-align:top; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style158 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style158 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:none #000000; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style159 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style159 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:none #000000; border-left:none #000000; border-right:2px solid #000000 !important; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style160 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style160 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style161 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style161 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style162 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style162 { vertical-align:middle; text-align:center; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:1px solid #000000 !important; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style163 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style163 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:1px solid #000000 !important; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style164 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style164 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:none #000000; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style165 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    th.style165 { vertical-align:top; text-align:center; border-bottom:1px solid #000000 !important; border-top:none #000000; border-left:none #000000; border-right:1px solid #000000 !important; font-style:italic; color:#000000; font-family:'Arial'; font-size:9pt; background-color:white }
    td.style166 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style166 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:1px solid #000000 !important; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    td.style167 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    th.style167 { vertical-align:top; text-align:left; padding-left:0px; border-bottom:none #000000; border-top:1px solid #000000 !important; border-left:none #000000; border-right:none #000000; font-weight:bold; color:#000000; font-family:'Arial'; font-size:10pt; background-color:white }
    table.sheet0 col.col0 { width:16.26666648pt }
    table.sheet0 col.col1 { width:45.41111059pt }
    table.sheet0 col.col2 { width:44.05555505pt }
    table.sheet0 col.col3 { width:42pt }
    table.sheet0 col.col4 { width:47.4444439pt }
    table.sheet0 col.col5 { width:42.02222174pt }
    table.sheet0 col.col6 { width:32.53333296pt }
    table.sheet0 col.col7 { width:40.6666662pt }
    table.sheet0 col.col8 { width:39.31111066pt }
    table.sheet0 col.col9 { width:61.67777707pt }
    table.sheet0 col.col10 { width:42pt }
    table.sheet0 tr { height:15pt }
    table.sheet0 tr.row0 { height:15.75pt }
    table.sheet0 tr.row43 { height:29.25pt }
    table.sheet0 tr.row44 { height:14.25pt }
    table.sheet0 tr.row45 { height:14.25pt }
    table.sheet0 tr.row47 { height:15pt }
  </style>
</head>

<body>
<style>
@page { margin-left: 0.7in; margin-right: 0.7in; margin-top: 0.75in; margin-bottom: 0.75in; }
body { margin-left: 0.7in; margin-right: 0.7in; margin-top: 0.75in; margin-bottom: 0.75in; }
</style>
  <table border="0" cellpadding="0" cellspacing="0" id="sheet0" class="sheet0 gridlines">
      <col class="col0">
      <col class="col1">
      <col class="col2">
      <col class="col3">
      <col class="col4">
      <col class="col5">
      <col class="col6">
      <col class="col7">
      <col class="col8">
      <col class="col9">
      <col class="col10">
      <tbody>
        <tr class="row0">
          <td class="column0">&nbsp;</td>
          <td class="column1 style160 s style162" colspan="9">TAX INVOICE</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row1">
          <td class="column0">&nbsp;</td>
          <td class="column1 style163 null style165" colspan="9"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row2">
          <td class="column0">&nbsp;</td>
          <td class="column1 style151 null"></td>
          <td class="column2 style152 s style154" colspan="3">ABC PVT LTD</td>
          <td class="column5 style155 s style156" colspan="2">Invoice No.</td>
          <td class="column7 style157 null"></td>
          <td class="column8 style158 s style159" colspan="2">Dated</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row3">
          <td class="column0">&nbsp;</td>
          <td class="column1 style38 s">LOGO</td>
          <td class="column2 style88 s style89" colspan="3">Address:1</td>
          <td class="column5 style101 s style102" colspan="2">ABC/001/23-24</td>
          <td class="column7 style5 null"></td>
          <td class="column8 style86 s style87" colspan="2">01/02/2023</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row4">
          <td class="column0">&nbsp;</td>
          <td class="column1 style21 null"></td>
          <td class="column2 style88 s style89" colspan="3">Address:2</td>
          <td class="column5 style90 s style110" colspan="3">Buyer's Order No.</td>
          <td class="column8 style90 s style91" colspan="2">Dated</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row5">
          <td class="column0">&nbsp;</td>
          <td class="column1 style21 null"></td>
          <td class="column2 style114 s style70" colspan="2">Hyderabad</td>
          <td class="column4 style40 s">500036</td>
          <td class="column5 style92 null style94" colspan="3"></td>
          <td class="column8 style92 null style98" colspan="2"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row6">
          <td class="column0">&nbsp;</td>
          <td class="column1 style21 null"></td>
          <td class="column2 style2 s">GSTIN: </td>
          <td class="column3 style67 s style89" colspan="2">36AAAAA1234AIZ5</td>
          <td class="column5 style95 null style97" colspan="3"></td>
          <td class="column8 style90 s style91" colspan="2">Mode/Terms of Payment</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row7">
          <td class="column0">&nbsp;</td>
          <td class="column1 style21 null"></td>
          <td class="column2 style2 s">CIN:</td>
          <td class="column3 style58 s style63" colspan="2">U74TG2011PTC012345</td>
          <td class="column5 style92 null style94" colspan="3"></td>
          <td class="column8 style99 s style100" colspan="2">Chq/Neft,RTGS</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row8">
          <td class="column0">&nbsp;</td>
          <td class="column1 style21 null"></td>
          <td class="column2 style2 s">PAN:</td>
          <td class="column3 style19 s">AAAAA1234A</td>
          <td class="column4 style20 null"></td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row9">
          <td class="column0">&nbsp;</td>
          <td class="column1 style21 null"></td>
          <td class="column2 style37 s">Contact:</td>
          <td class="column3 style67 s style89" colspan="2">+911234567890</td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row10">
          <td class="column0">&nbsp;</td>
          <td class="column1 style21 null"></td>
          <td class="column2 style37 s">Land Line:</td>
          <td class="column3 style67 s style89" colspan="2">040-1234 1234</td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row11">
          <td class="column0">&nbsp;</td>
          <td class="column1 style23 null"></td>
          <td class="column2 style37 s">E-Mail:</td>
          <td class="column3 style113 s style71" colspan="2"><a href="mailto:XYZ@gmail.com" title="">XYZ@gmail.com</a></td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row12">
          <td class="column0">&nbsp;</td>
          <td class="column1 style103 s style105" colspan="4">Buyer</td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row13">
          <td class="column0">&nbsp;</td>
          <td class="column1 style106 s style108" colspan="4">Address:1</td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row14">
          <td class="column0">&nbsp;</td>
          <td class="column1 style106 s style108" colspan="4">Address:2</td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row15">
          <td class="column0">&nbsp;</td>
          <td class="column1 style115 s style67" colspan="2">Hyderabad</td>
          <td class="column3 style15 s">PIN</td>
          <td class="column4 style16 s">500029</td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row16">
          <td class="column0">&nbsp;</td>
          <td class="column1 style25 s">State:</td>
          <td class="column2 style67 s style89" colspan="3">Telangana</td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row17">
          <td class="column0">&nbsp;</td>
          <td class="column1 style24 s">PAN/IT No :</td>
          <td class="column2 style67 s style67" colspan="2">AAAAA1234A</td>
          <td class="column4 style16 null"></td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row18">
          <td class="column0">&nbsp;</td>
          <td class="column1 style39 s">GSTIN:</td>
          <td class="column2 style68 s style69" colspan="3">36AAAAA5678AIZ7</td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row19">
          <td class="column0">&nbsp;</td>
          <td class="column1 style25 s">Telangana, Code :</td>
          <td class="column2 style15 null"></td>
          <td class="column3 style15 s">36</td>
          <td class="column4 style16 null"></td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row20">
          <td class="column0">&nbsp;</td>
          <td class="column1 style25 s">Place of Supply :</td>
          <td class="column2 style15 null"></td>
          <td class="column3 style70 s style71" colspan="2">Telangana</td>
          <td class="column5 style1 null"></td>
          <td class="column6 style1 null"></td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row21">
          <td class="column0">&nbsp;</td>
          <td class="column1 style26 s">Sl No.</td>
          <td class="column2 style120 s style121" colspan="5">Particulars</td>
          <td class="column7 style6 s">HSN/SAC</td>
          <td class="column8 style14 s">GST Rate</td>
          <td class="column9 style27 s">Amount</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row22">
          <td class="column0">&nbsp;</td>
          <td class="column1 style28 s"></td>
          <td class="column2 style118 s style119" colspan="5">Description of Services</td>
          <td class="column7 style17 null"></td>
          <td class="column8 style11 s"></td>
          <td class="column9 style29 s"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row23">
          <td class="column0">&nbsp;</td>
          <td class="column1 style30 s">01.</td>
          <td class="column2 style166 s style167" colspan="5">Consulting Services</td>
          <td class="column7 style46 n">998222</td>
          <td class="column8 style8 n">&amp;quot;0&amp;quot; %</td>
          <td class="column9 style31 n">10000.00</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row24">
          <td class="column0">&nbsp;</td>
          <td class="column1 style30 null"></td>
          <td class="column2 style72 null style74" colspan="5"></td>
          <td class="column7 style18 null"></td>
          <td class="column8 style7 null"></td>
          <td class="column9 style31 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row25">
          <td class="column0">&nbsp;</td>
          <td class="column1 style30 null"></td>
          <td class="column2 style3 null"></td>
          <td class="column3 style4 null"></td>
          <td class="column4 style4 null"></td>
          <td class="column5 style4 null"></td>
          <td class="column6 style4 null"></td>
          <td class="column7 style18 null"></td>
          <td class="column8 style7 null"></td>
          <td class="column9 style31 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row26">
          <td class="column0">&nbsp;</td>
          <td class="column1 style30 null"></td>
          <td class="column2 style3 null"></td>
          <td class="column3 style4 null"></td>
          <td class="column4 style4 null"></td>
          <td class="column5 style4 null"></td>
          <td class="column6 style4 null"></td>
          <td class="column7 style18 null"></td>
          <td class="column8 style7 null"></td>
          <td class="column9 style31 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row27">
          <td class="column0">&nbsp;</td>
          <td class="column1 style30 null"></td>
          <td class="column2 style3 null"></td>
          <td class="column3 style4 null"></td>
          <td class="column4 style4 null"></td>
          <td class="column5 style4 null"></td>
          <td class="column6 style4 null"></td>
          <td class="column7 style18 null"></td>
          <td class="column8 style7 null"></td>
          <td class="column9 style31 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row28">
          <td class="column0">&nbsp;</td>
          <td class="column1 style30 null"></td>
          <td class="column2 style3 null"></td>
          <td class="column3 style4 null"></td>
          <td class="column4 style4 null"></td>
          <td class="column5 style4 null"></td>
          <td class="column6 style4 null"></td>
          <td class="column7 style18 null"></td>
          <td class="column8 style7 null"></td>
          <td class="column9 style32 f">10000.00</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row29">
          <td class="column0">&nbsp;</td>
          <td class="column1 style30 s"></td>
          <td class="column2 style116 s style117" colspan="6">CGST</td>
          <td class="column8 style7 s"></td>
          <td class="column9 style31 f">900.00</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row30">
          <td class="column0">&nbsp;</td>
          <td class="column1 style30 s"></td>
          <td class="column2 style116 s style117" colspan="6">SGST</td>
          <td class="column8 style7 s"></td>
          <td class="column9 style31 f">900.00</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row31">
          <td class="column0">&nbsp;</td>
          <td class="column1 style53 null"></td>
          <td class="column2 style122 s style123" colspan="6">IGST</td>
          <td class="column8 style7 null"></td>
          <td class="column9 style31 n">0.00</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row32">
          <td class="column0">&nbsp;</td>
          <td class="column1 style82 s style83" colspan="7">Total</td>
          <td class="column8 style12 s"></td>
          <td class="column9 style33 f">₹ 11800.00</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row33">
          <td class="column0">&nbsp;</td>
          <td class="column1 style84 s style85" colspan="6">Amount Chargeable (in words)</td>
          <td class="column7 style146 s style147" colspan="3">E. &amp; O.E</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row34">
          <td class="column0">&nbsp;</td>
          <td class="column1 style148 s style149" colspan="6">INR Eleven Thousand Eight Hundred Only</td>
          <td class="column7 style1 null"></td>
          <td class="column8 style1 null"></td>
          <td class="column9 style22 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row35">
          <td class="column0">&nbsp;</td>
          <td class="column1 style133 s style77" colspan="2">HSN/SAC</td>
          <td class="column3 style14 s">Taxable</td>
          <td class="column4 style137 s style111" colspan="2">Central Tax</td>
          <td class="column6 style137 s style150" colspan="2">State Tax</td>
          <td class="column8 style111 s style112" colspan="2">Interstate Tax</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row36">
          <td class="column0">&nbsp;</td>
          <td class="column1 style134 null style119" colspan="2"></td>
          <td class="column3 style11 s">Value</td>
          <td class="column4 style12 s">Rate</td>
          <td class="column5 style12 s">Amount</td>
          <td class="column6 style12 s">Rate</td>
          <td class="column7 style49 s">Amount</td>
          <td class="column8 style13 s">Rate</td>
          <td class="column9 style34 s">Amount</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row37">
          <td class="column0">&nbsp;</td>
          <td class="column1 style135 f style136" colspan="2">998222</td>
          <td class="column3 style47 f">10000</td>
          <td class="column4 style42 f">&amp;quot;0&amp;quot; %</td>
          <td class="column5 style41 f">900</td>
          <td class="column6 style42 f">&amp;quot;0&amp;quot; %</td>
          <td class="column7 style50 f">900</td>
          <td class="column8 style48 f">&amp;quot;0&amp;quot; %</td>
          <td class="column9 style43 n">0</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row38">
          <td class="column0">&nbsp;</td>
          <td class="column1 style138 null style139" colspan="2"></td>
          <td class="column3 style47 null"></td>
          <td class="column4 style42 null"></td>
          <td class="column5 style47 null"></td>
          <td class="column6 style42 null"></td>
          <td class="column7 style47 null"></td>
          <td class="column8 style42 null"></td>
          <td class="column9 style43 null"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row39">
          <td class="column0">&nbsp;</td>
          <td class="column1 style140 s style141" colspan="2">Total</td>
          <td class="column3 style54 s">10,000.00</td>
          <td class="column4 style51 null"></td>
          <td class="column5 style10 null"></td>
          <td class="column6 style10 s"></td>
          <td class="column7 style10 s"></td>
          <td class="column8 style10 s"></td>
          <td class="column9 style35 s"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row40">
          <td class="column0">&nbsp;</td>
          <td class="column1 style24 s">Tax Amount (in words) :</td>
          <td class="column2 style52 null"></td>
          <td class="column3 style77 s style78" colspan="4">One Thousand Eight Hundred Only</td>
          <td class="column7 style80 s style81" colspan="3">Company's Bank Details</td>
          <td class="column10 style9 null"></td>
        </tr>
        <tr class="row41">
          <td class="column0">&nbsp;</td>
          <td class="column1 style142 null style143" colspan="3"></td>
          <td class="column4 style144 null style145" colspan="3"></td>
          <td class="column7 style79 s style69" colspan="2">Bank Name :</td>
          <td class="column9 style55 s">SBI</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row42">
          <td class="column0">&nbsp;</td>
          <td class="column1 style124 s style126" colspan="6">Declaration</td>
          <td class="column7 style79 s style69" colspan="2">Account No. :</td>
          <td class="column9 style56 s">1234567890</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row43">
          <td class="column0">&nbsp;</td>
          <td class="column1 style127 s style129" colspan="6">We declare that  this invoice shows the actual price of the services escribed and that all particulars are true and correct.</td>
          <td class="column7 style75 s style76" colspan="2">Branch &amp; IFS Code :</td>
          <td class="column9 style57 s">Mettuguda &amp;SBIN0001234</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row44">
          <td class="column0">&nbsp;</td>
          <td class="column1 style84 s style85" colspan="6">Customer's Seal and Signature</td>
          <td class="column7 style130 s style132" colspan="3">for ABC Pvt. Ltd.</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row45">
          <td class="column0">&nbsp;</td>
          <td class="column1 style62 null style66" colspan="6" rowspan="3"></td>
          <td class="column7 style59 null style61" colspan="3" rowspan="2"></td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row46">
          <td class="column0">&nbsp;</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row47">
          <td class="column0">&nbsp;</td>
          <td class="column7 style44 null"></td>
          <td class="column8 style36 null"></td>
          <td class="column9 style45 s">Authorised Signatory</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row48">
          <td class="column0">&nbsp;</td>
          <td class="column1 style58 s style58" colspan="9">This is a Computer Generated Invoice</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row49">
          <td class="column0">&nbsp;</td>
          <td class="column1">&nbsp;</td>
          <td class="column2">&nbsp;</td>
          <td class="column3">&nbsp;</td>
          <td class="column4">&nbsp;</td>
          <td class="column5">&nbsp;</td>
          <td class="column6">&nbsp;</td>
          <td class="column7">&nbsp;</td>
          <td class="column8">&nbsp;</td>
          <td class="column9">&nbsp;</td>
          <td class="column10 style1 null"></td>
        </tr>
        <tr class="row50">
          <td class="column0">&nbsp;</td>
          <td class="column1">&nbsp;</td>
          <td class="column2">&nbsp;</td>
          <td class="column3">&nbsp;</td>
          <td class="column4">&nbsp;</td>
          <td class="column5">&nbsp;</td>
          <td class="column6">&nbsp;</td>
          <td class="column7">&nbsp;</td>
          <td class="column8">&nbsp;</td>
          <td class="column9">&nbsp;</td>
          <td class="column10 style1 null"></td>
        </tr>
      </tbody>
  </table>
</body>
</html>`

export default Invoice;