:root {
  --color-01:#6C6C6C;
}

:root {
    --fontSize: 16px;
    --fontFamily: sans-serif;
    --lineHeight: 1.4;
  }
  
  /* Spacing */
  
  :root {
    --spaceSmall: 10px;
    --spaceMedium: 15px;
    --spaceLarge: 20px;
  }
  
code {
    font-family: Inconsolata, Consolas, monospace;
  }
  
:root {
--primary: #101b21;
--color-00: #ac0909; 
--color-01: #555555; 
--color-02: #000080; 
--color-03: #990073; 
--color-04: #174.4°, 98.2%, 85.1%; 
--color-06: #018985;
--color-05: #454545;
--color-07: #3802B2;
--color-10: rgb(128, 128, 128);
}

.fx {
  -webkit-display: flex;
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
}

.fx > div {
  padding-left: 20px;
  padding-right: 20px;
}

.fx > div:first-child {
  width: 30%;
}

.flex {
  -webkit-flex: 1;
  flex: 1;
}

#test-target {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.animation {
  animation: vibrate 0.3s linear infinite both;
}
@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}