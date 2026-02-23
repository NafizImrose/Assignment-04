function showOnly(value) {
  const allJobs = document.getElementById("all-job-section");
  const interviewJobs = document.getElementById("interview-section");
  const rejectedJobs = document.getElementById("rejected-section");

  allJobs.classList.add("hidden");
  interviewJobs.classList.add("hidden");
  rejectedJobs.classList.add("hidden");

  const select = document.getElementById(value);
  select.classList.remove("hidden");

  const count = document.getElementById("current-eight");

  if (select.id == "interview-section") {
    const box = document.getElementById("eight-jobs");
    box.innerText = "of 8 Jobs";
    const interview = document.getElementById("interview");
    count.innerText = interview.innerText;
    count.classList.remove("hidden");
    // no-jobs section add
    const noJobs = document.getElementById("no-interview");
    if (interview.innerText == "0") {
      noJobs.classList.remove("hidden");
    } else {
      noJobs.classList.add("hidden");
    }
    // ******
  } else if (select.id == "rejected-section") {
    const box = document.getElementById("eight-jobs");
    box.innerText = "of 8 Jobs";
    const rejected = document.getElementById("rejected");
    count.innerText = rejected.innerText;
    count.classList.remove("hidden");
    // no-job section add
    const noJobs = document.getElementById("no-rejected");
    if (rejected.innerText == "0") {
      noJobs.classList.remove("hidden");
    } else {
      noJobs.classList.add("hidden");
    }
    // ******************
  } else {
    const box = document.getElementById("eight-jobs");
    box.innerText = "Jobs";
    //count.classList.add("hidden");
  }
}

// function interviewButton(button) {
//   const interviewCount = document.getElementById("interview");
//   let number = Number(interviewCount.innerText);

//   const section = document.getElementById("interview-section");
//   const card = button.closest(".card");

//   const statusBox = card.querySelector(".w-29");
//   const text = statusBox.querySelector("p");

//   //   checking for duplicate append
//   if (text.innerText == "APPLIED") {
//     return;
//   }

//   if (text.innerText == "REJECTED") {
//     const rejectedCount = document.getElementById("rejected");
//     let number = Number(rejectedCount.innerText);
//     number = number - 1;
//     rejectedCount.innerText = number;
//     statusBox.classList.remove("bg-red-500");
//   }

//   if (text.innerText == "NOT APPLIED") {
//     statusBox.classList.remove("bg-slate-300");
//   }

//   if (section && card) {
//     const copy = card.cloneNode(true);

//     //badge proparty added for interview section
//     const copyBox = copy.querySelector(".w-29");
//     const copytext = copyBox.querySelector("p");

//     if (copytext.innerText == "REJECTED") {
//       copyBox.classList.remove("bg-red-500");
//       copyBox.classList.add("bg-green-500");
//       copyBox.classList.add("text-white");
//       copytext.innerText = "APPLIED";
//       section.append(copy);
//       number = number + 1;
//       interviewCount.innerText = number;
//       return;
//     }

//     copyBox.classList.remove("bg-slate-300");
//     copyBox.classList.add("bg-green-500");
//     copyBox.classList.add("text-white");
//     copytext.innerText = "APPLIED";

//     section.append(copy);
//     number = number + 1;

//     interviewCount.innerText = number;
//   }

//   text.innerText = "APPLIED";

//   statusBox.classList.add("bg-green-500");
//   statusBox.classList.add("text-white");
// }
function interviewButton(button) {
  const interviewCount = document.getElementById("interview");
  let number = Number(interviewCount.innerText);

  const interviewSection = document.getElementById("interview-section");
  const rejectedSection = document.getElementById("rejected-section");
  const card = button.closest(".card");

  const statusBox = card.querySelector(".w-29");
  const text = statusBox.querySelector("p");

  // Prevent duplicate APPLIED
  if (text.innerText === "APPLIED") return;

  // If previously in Rejected, remove from Rejected section and update count
  if (text.innerText === "REJECTED") {
    const rejectedCount = document.getElementById("rejected");
    rejectedCount.innerText = Number(rejectedCount.innerText) - 1;

    // Find and remove the clone in rejected section
    const rejectedClone = Array.from(rejectedSection.children).find(
      (c) =>
        c.querySelector(".w-29 p") &&
        c.querySelector(".w-29 p").innerText === "REJECTED",
    );
    if (rejectedClone) rejectedSection.removeChild(rejectedClone);
  }

  // Clone the card for interview section
  const clone = card.cloneNode(true);
  const cloneStatusBox = clone.querySelector(".w-29");
  const cloneText = cloneStatusBox.querySelector("p");

  // Update badge in the clone
  cloneStatusBox.classList.remove("bg-slate-300", "bg-red-500");
  cloneStatusBox.classList.add("bg-green-500", "text-white");
  cloneText.innerText = "APPLIED";

  // Append clone to interview section
  interviewSection.appendChild(clone);
  number += 1;
  interviewCount.innerText = number;

  // Update original card's badge in All section
  statusBox.classList.remove("bg-slate-300", "bg-red-500");
  statusBox.classList.add("bg-green-500", "text-white");
  text.innerText = "APPLIED";
}

// function rejectButton(button) {
//   const rejectedCount = document.getElementById("rejected");
//   let number = Number(rejectedCount.innerText);

//   const section = document.getElementById("rejected-section");
//   const card = button.closest(".card");

//   const statusBox = card.querySelector(".w-29");
//   const text = statusBox.querySelector("p");

//   //   checking for duplicate append
//   if (text.innerText == "REJECTED") {
//     return;
//   }

//   if (text.innerText == "APPLIED") {
//     const interviewCount = document.getElementById("interview");
//     let number = Number(interviewCount.innerText);
//     number = number - 1;
//     interviewCount.innerText = number;
//     statusBox.classList.remove("bg-green-500");
//   }

//   if (text.innerText == "NOT APPLIED") {
//     statusBox.classList.remove("bg-slate-300");
//   }

//   if (section && card) {
//     const copy = card.cloneNode(true);

//     //badge proparty added for reject section
//     const copyBox = copy.querySelector(".w-29");
//     const copytext = copyBox.querySelector("p");

//     if (copytext.innerText == "APPLIED") {
//       copyBox.classList.remove("bg-green-500");
//       copyBox.classList.add("bg-red-500");
//       copyBox.classList.add("text-white");
//       copytext.innerText = "REJECTED";
//       const secondCopy = copy.cloneNode(true);
//       section.append(secondCopy);
//       copy.remove();
//       number = number + 1;
//       rejectedCount.innerText = number;
//       return;
//     }
//     copyBox.classList.remove("bg-slate-300");
//     copyBox.classList.add("bg-red-500");
//     copyBox.classList.add("text-white");
//     copytext.innerText = "REJECTED";

//     section.append(copy);
//     number = number + 1;
//     rejectedCount.innerText = number;
//   }

//   text.innerText = "REJECTED";

//   statusBox.classList.remove("bg-slate-300");
//   statusBox.classList.add("bg-red-500");
//   statusBox.classList.add("text-white");
// }

function rejectButton(button) {
  const rejectedCount = document.getElementById("rejected");
  let number = Number(rejectedCount.innerText);

  const rejectedSection = document.getElementById("rejected-section");
  const interviewSection = document.getElementById("interview-section");
  const card = button.closest(".card");

  const statusBox = card.querySelector(".w-29");
  const text = statusBox.querySelector("p");

  // Prevent duplicate REJECTED
  if (text.innerText === "REJECTED") return;

  // If previously in Interview, remove from Interview section and update count
  if (text.innerText === "APPLIED") {
    const interviewCount = document.getElementById("interview");
    interviewCount.innerText = Number(interviewCount.innerText) - 1;

    // Find and remove the clone in Interview section
    const interviewClone = Array.from(interviewSection.children).find(
      (c) =>
        c.querySelector(".w-29 p") &&
        c.querySelector(".w-29 p").innerText === "APPLIED",
    );
    if (interviewClone) interviewSection.removeChild(interviewClone);
  }

  // Clone the card for rejected section
  const clone = card.cloneNode(true);
  const cloneStatusBox = clone.querySelector(".w-29");
  const cloneText = cloneStatusBox.querySelector("p");

  // Update badge in the clone
  cloneStatusBox.classList.remove("bg-slate-300", "bg-green-500");
  cloneStatusBox.classList.add("bg-red-500", "text-white");
  cloneText.innerText = "REJECTED";

  // Append clone to rejected section
  rejectedSection.appendChild(clone);
  number += 1;
  rejectedCount.innerText = number;

  // Update original card's badge in All section
  statusBox.classList.remove("bg-slate-300", "bg-green-500");
  statusBox.classList.add("bg-red-500", "text-white");
  text.innerText = "REJECTED";
}

function deleteJob(button) {
  const deleteElmn = button.closest(".card");
  deleteElmn.remove();

  const check = button.closest("#all-job-section");

  if (check) {
    return;
  }

  const countJobs = document.getElementById("current-eight").innerText;

  let count = Number(countJobs);

  count = count - 1;

  document.getElementById("total").innerText = count;
  document.getElementById("current-eight").innerText = count;
}
