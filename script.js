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
  } else if (select.id == "rejected-section") {
    const box = document.getElementById("eight-jobs");
    box.innerText = "of 8 Jobs";
    const rejected = document.getElementById("rejected");
    count.innerText = rejected.innerText;
    count.classList.remove("hidden");
  } else {
    const box = document.getElementById("eight-jobs");
    box.innerText = "8 Jobs";
    count.classList.add("hidden");
  }
}

function interviewButton(button) {
  const interviewCount = document.getElementById("interview");
  let number = Number(interviewCount.innerText);

  if (number == 0) {
    alert("no number");
  }

  const section = document.getElementById("interview-section");
  const card = button.closest(".card");

  const statusBox = card.querySelector(".w-29");
  const text = statusBox.querySelector("p");

  //   checking for duplicate append
  if (text.innerText == "APPLIED") {
    return;
  }

  if (text.innerText == "REJECTED") {
    const rejectedCount = document.getElementById("rejected");
    let number = Number(rejectedCount.innerText);
    number = number - 1;
    rejectedCount.innerText = number;
    statusBox.classList.remove("bg-red-500");
  }

  if ((text.innerText = "NOT APPLIED")) {
    statusBox.classList.remove("bg-slate-300");
  }

  if (section && card) {
    const copy = card.cloneNode(true);
    section.append(copy);
    number = number + 1;
    interviewCount.innerText = number;
  }

  text.innerText = "APPLIED";

  statusBox.classList.add("bg-green-500");
  statusBox.classList.add("text-white");
}

function rejectButton(button) {
  const rejectedCount = document.getElementById("rejected");
  let number = Number(rejectedCount.innerText);

  if (number == 0) {
    alert("no number");
  }

  const section = document.getElementById("rejected-section");
  const card = button.closest(".card");

  const statusBox = card.querySelector(".w-29");
  const text = statusBox.querySelector("p");

  //   checking for duplicate append
  if (text.innerText == "REJECTED") {
    return;
  }

  if (text.innerText == "APPLIED") {
    const interviewCount = document.getElementById("interview");
    let number = Number(interviewCount.innerText);
    number = number - 1;
    interviewCount.innerText = number;
    statusBox.classList.remove("bg-green-500");
  }

  if ((text.innerText = "NOT APPLIED")) {
    statusBox.classList.remove("bg-slate-300");
  }

  if (section && card) {
    const copy = card.cloneNode(true);
    section.append(copy);
    number = number + 1;
    rejectedCount.innerText = number;
  }

  text.innerText = "REJECTED";

  statusBox.classList.remove("bg-slate-300");
  statusBox.classList.add("bg-red-500");
  statusBox.classList.add("text-white");
}

function deleteJob(button) {
  const deleteElmn = button.closest(".card");
  deleteElmn.remove();
}
