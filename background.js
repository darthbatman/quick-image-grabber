chrome.runtime.onMessage.addListener(

  function(arg, sender, sendResponse) {

    var img_url = arg;

    var saveas = "";

    try {

      if (img_url[img_url.replace(/[^a-zA-Z0-9]/g,'-').lastIndexOf("-")] == '.'){

        saveas = img_url.replace(/[^a-zA-Z0-9]/g,'-').substring(0, img_url.replace(/[^a-zA-Z0-9]/g,'-').lastIndexOf("-")) + "." + img_url.replace(/[^a-zA-Z0-9]/g,'-').substring(img_url.replace(/[^a-zA-Z0-9]/g,'-').lastIndexOf("-") + 1);
      
      }
      else {

        saveas = img_url.replace(/[^a-zA-Z0-9]/g,'-') + ".png";

      }

    }
    catch (problem){

      console.log("ERR: + " + problem);

    }

    chrome.downloads.download({

      url: img_url,
      filename: saveas,
      saveAs: false

    });

   }

);
