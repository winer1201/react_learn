/**
* layout
*/

const layout = (html,data) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>React</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link type="image/x-icon" rel="shortcut icon" href="//static.nodejs.so/sns.png">
    <!--[if lt IE 9]>
      <script src="//cdn.svon.org/js/libs/json2.js"></script>
      <script src="//cdn.svon.org/js/libs/es5-shim/es5-shim.min.js"></script>
      <script src="//cdn.svon.org/js/libs/es5-shim/es5-sham.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="//static.nodejs.so/css/reset.css">
    <style>
      .animation{
        margin-top : 100px;
      }
    </style>
  </head>
  <body>
    <script>
      window.__DATA__ = "${data}";
    </script>
    <div id="example">${html}</div>
    <script src="/client.min.js"></script>
  </body>
</html>
  `;
}

export default (...args) => {
  return layout(...args);
}