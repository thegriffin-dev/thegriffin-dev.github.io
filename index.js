const context = "MZZWM9";

document.getElementById("generate").addEventListener("click", generateInc);

function generateInc() {
  const incType = document.getElementById("incType").value;
  const incValue = document.getElementById("incValue").value;
  const storer = document.getElementById("storer").value;
  const orderNum = document.getElementById("orderNum").value;
  const output = document.getElementById("output");

  let incTitle = "";
  let incContext = "";

  switch (incType) {
    case "Lot":
      incTitle = `${context} | ${storer} | QTYonHOLD Discrepancy | Lot: ${incValue}`;
      incContext = "Hey, I'm having trouble allocating items in order: "+orderNum+". The issue concerns: "+incValue+".I suspect that it's QTYonHOLD Discrepancy. I would really appreciate a prompt update to the database.";
      break;
    default:
      incTitle = "Unknown type";
      break;

      case "Hold":
        incTitle = `${context} | ${storer} | holded IDs appear as unholded | ${incValue}`;
        incContext = "Hello,\nPlease help—we’ve noticed that even though IDs "+incValue+" have been hold, they still appear as unholded in INFOR.";
        break;

        case "IonUat":
          incTitle = `ION PRE-PROD | Serwer down`;
          incContext = "Hi,\nWhile I was working, I noticed that the ION UAT server isn't working.\nCould you please restart it?";
          break;

          case "Printer":
            incTitle = `ION PRE-PROD | Serwer down`;
            incContext = "Hi,\nWhile I was working, I noticed that the ION UAT server isn't working.\nCould you please restart it?";
            break;
  }

  output.innerText = incTitle + "\n\n" + incContext;
}
