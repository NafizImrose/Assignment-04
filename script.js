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
  const total = document.getElementById("total").innerText;

  if (select.id == "interview-section") {
    const box = document.getElementById("eight-jobs");
    box.innerText = "of " + total + " Jobs";
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
    box.innerText = "of " + total + " Jobs";
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
    count.innerText = total;
    //count.classList.add("hidden");
  }
}

function interviewButton(button) {
  const interviewCount = document.getElementById("interview");
  let number = Number(interviewCount.innerText);

  const section = document.getElementById("interview-section");
  const card = button.closest(".card");

  const statusBox = card.querySelector(".w-29");
  const text = statusBox.querySelector("p");

  //   checking for duplicate append
  if (text.innerText == "APPLIED") {
    return;
  }
  // choose eiter interview or rejected button
  if (text.innerText == "REJECTED" && button.closest("#all-job-section")) {
    alert("Choose either Interview or Rejected here");
    return;
  }

  const rejectedCount = document.getElementById("rejected");
  if (text.innerText == "REJECTED") {
    let number = Number(rejectedCount.innerText);
    number = number - 1;
    rejectedCount.innerText = number;
    statusBox.classList.remove("bg-red-500");
  }

  const demo = document.getElementById("no-rejected");
  if (rejectedCount.innerText == "0") {
    demo.classList.remove("hidden");
  } else {
    demo.classList.add("hidden");
  }

  if (text.innerText == "NOT APPLIED") {
    statusBox.classList.remove("bg-slate-300");
  }

  if (section && card) {
    const copy = card.cloneNode(true);

    //badge proparty added for interview section
    const copyBox = copy.querySelector(".w-29");
    const copytext = copyBox.querySelector("p");

    if (copytext.innerText == "REJECTED") {
      copyBox.classList.remove("bg-red-500");
      copyBox.classList.add("bg-green-500");
      copyBox.classList.add("text-white");
      copytext.innerText = "APPLIED";
      section.append(copy);
      card.remove();
      number = number + 1;
      interviewCount.innerText = number;
      //count update to available jobs
      const abc = document.getElementById("current-eight");
      abc.innerText = rejectedCount.innerText;
      return;
    }

    copyBox.classList.remove("bg-slate-300");
    copyBox.classList.add("bg-green-500");
    copyBox.classList.add("text-white");
    copytext.innerText = "APPLIED";

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

  const section = document.getElementById("rejected-section");
  const card = button.closest(".card");

  const statusBox = card.querySelector(".w-29");
  const text = statusBox.querySelector("p");

  //   checking for duplicate append
  if (text.innerText == "REJECTED") {
    return;
  }
  // choose eiter interview or rejected button
  if (text.innerText == "APPLIED" && button.closest("#all-job-section")) {
    alert("Choose either Interview or Rejected here");
    return;
  }

  const interviewCount = document.getElementById("interview");
  if (text.innerText == "APPLIED") {
    let number = Number(interviewCount.innerText);
    number = number - 1;
    interviewCount.innerText = number;
    statusBox.classList.remove("bg-green-500");
  }

  const demo = document.getElementById("no-interview");
  if (interviewCount.innerText == "0") {
    demo.classList.remove("hidden");
  } else {
    demo.classList.add("hidden");
  }

  if (text.innerText == "NOT APPLIED") {
    statusBox.classList.remove("bg-slate-300");
  }

  if (section && card) {
    const copy = card.cloneNode(true);

    //badge proparty added for reject section
    const copyBox = copy.querySelector(".w-29");
    const copytext = copyBox.querySelector("p");

    if (copytext.innerText == "APPLIED") {
      copyBox.classList.remove("bg-green-500");
      copyBox.classList.add("bg-red-500");
      copyBox.classList.add("text-white");
      copytext.innerText = "REJECTED";

      section.append(copy);
      card.remove();
      number = number + 1;
      rejectedCount.innerText = number;
      //count update to available jobs
      const abc = document.getElementById("current-eight");
      abc.innerText = interviewCount.innerText;
      return;
    }
    copyBox.classList.remove("bg-slate-300");
    copyBox.classList.add("bg-red-500");
    copyBox.classList.add("text-white");
    copytext.innerText = "REJECTED";

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
  const card = button.closest(".card");
  const id = card.dataset.id;

  const total = document.getElementById("total");
  let totalNumber = Number(total.innerText);
  totalNumber = totalNumber - 1;
  total.innerText = totalNumber;
  //   const place = document.getElementById("current-eight");
  //   place.innerText = totalNumber;

  const allCards = document.querySelectorAll(`.card[data-id="${id}"]`);

  const interview = document.getElementById("interview");
  const rejected = document.getElementById("rejected");
  let interviewCount = Number(interview.innerText);
  let rejectedCount = Number(rejected.innerText);

  let flag = true;
  let flag1 = true;
  for (let i = 0; i < allCards.length; i++) {
    const box = allCards[i].querySelector(".w-29");
    const text = box.querySelector("p").innerText;

    allCards[i].remove();

    if (text == "APPLIED" && flag) {
      interviewCount = interviewCount - 1;
      interview.innerText = interviewCount;
      flag = false;
      const abc = document.getElementById("no-interview");
      if (interviewCount == 0) {
        abc.classList.remove("hidden");
      } else {
        abc.classList.add("hidden");
      }
    } else if (text == "REJECTED" && flag1) {
      rejectedCount = rejectedCount - 1;
      rejected.innerText = rejectedCount;
      flag1 = false;
      const abc = document.getElementById("no-rejected");
      if (rejectedCount == 0) {
        abc.classList.remove("hidden");
      } else {
        abc.classList.add("hidden");
      }
    }
  }

  const current = document.getElementById("current-eight");
  const label = document.getElementById("eight-jobs");

  if (
    !document.getElementById("all-job-section").classList.contains("hidden")
  ) {
    current.innerText = totalNumber;
    label.innerText = "Jobs";
  } else if (
    !document.getElementById("interview-section").classList.contains("hidden")
  ) {
    current.innerText = interviewCount;
    label.innerText = "of " + totalNumber + " Jobs";
  } else {
    current.innerText = rejectedCount;
    label.innerText = "of " + totalNumber + " Jobs";
  }
}
