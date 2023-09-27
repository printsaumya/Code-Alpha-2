function changeColor() {
    var colorInput = document.getElementById("colorInput");
    var colorName = colorInput.value.toLowerCase();

    var color = tinycolor(colorName);

    if (color.isValid()) {
      var hexColor = color.toHexString();

      document.getElementById("body").style.backgroundColor = hexColor;
      if (hexColor.toLowerCase() === "#ffffff") {
        document.getElementById("heading").style.color = "black";
        document.getElementById("label").style.color = "black";
        document.getElementById("colorInput").style.border = "2px solid black";
      } else {
        document.getElementById("heading").style.color = "white";
        document.getElementById("label").style.color = "white";
        document.getElementById("colorInput").style.border = "none";
      }
      document.getElementById("btn").href = generateImageDataUrl(color);
    document.getElementById("btn").setAttribute("download", color + ".png");

    function generateImageDataUrl(color) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 1024;
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/png");
  }
    } else {
      alert("Invalid color name. Please enter a valid color name.");
    }
  }