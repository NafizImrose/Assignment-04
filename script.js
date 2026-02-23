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
//     // const copy = card.cloneNode(false);

//     //badge proparty added for interview section
//     const copyBox = copy.querySelector(".w-29");
//     const copytext = copyBox.querySelector("p");

//     if (copytext.innerText == "REJECTED") {
//       copyBox.classList.remove("bg-red-500");
//       copyBox.classList.add("bg-green-500");
//       copyBox.classList.add("text-white");
//       copytext.innerText = "APPLIED";
//       section.append(copyBox);
//     }

//     copyBox.classList.remove("bg-slate-300");
//     copyBox.classList.add("bg-green-500");
//     copyBox.classList.add("text-white");
//     copytext.innerText = "APPLIED";

//     section.append(card);
//     number = number + 1;

//     interviewCount.innerText = number;
//   }

//   text.innerText = "APPLIED";

//   statusBox.classList.add("bg-green-500");
//   statusBox.classList.add("text-white");
// }

function interviewButton(button) {
  const interviewSection = document.getElementById("interview-section");
  const rejectedSection = document.getElementById("rejected-section");

  const interviewCount = document.getElementById("interview");
  const rejectedCount = document.getElementById("rejected");

  const card = button.closest(".card");
  const statusBox = card.querySelector(".w-29");
  const text = statusBox.querySelector("p");

  // Stop if already applied
  if (text.innerText === "APPLIED") {
    return;
  }

  // If card is inside rejected section
  if (rejectedSection.contains(card)) {
    let rCount = Number(rejectedCount.innerText);
    rejectedCount.innerText = rCount - 1;
  }

  // Remove old colors
  statusBox.classList.remove("bg-red-500", "bg-slate-300");

  // Add applied styles
  statusBox.classList.add("bg-green-500", "text-white");
  text.innerText = "APPLIED";

  // Move the original card
  interviewSection.append(card);

  // Increase interview count
  let iCount = Number(interviewCount.innerText);
  interviewCount.innerText = iCount + 1;
}

function rejectButton(button) {
  const rejectedSection = document.getElementById("rejected-section");
  const interviewSection = document.getElementById("interview-section");

  const rejectedCount = document.getElementById("rejected");
  const interviewCount = document.getElementById("interview");

  const card = button.closest(".card");
  const statusBox = card.querySelector(".w-29");
  const text = statusBox.querySelector("p");

  // Stop if already rejected
  if (text.innerText === "REJECTED") {
    return;
  }

  // If card was in interview section
  if (interviewSection.contains(card)) {
    let iCount = Number(interviewCount.innerText);
    interviewCount.innerText = iCount - 1;
  }

  // Remove previous colors
  statusBox.classList.remove("bg-green-500", "bg-slate-300");

  // Add rejected styles
  statusBox.classList.add("bg-red-500", "text-white");
  text.innerText = "REJECTED";

  // Move the original card
  rejectedSection.append(card);

  // Increase rejected count
  let rCount = Number(rejectedCount.innerText);
  rejectedCount.innerText = rCount + 1;
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
