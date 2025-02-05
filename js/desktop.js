"use strict";
//Enter email
function handleSubmit() {
  //Take section-info
  const sectionInfo = document.querySelector(".section-info");

  //Take email value
  const emailValue = document.querySelector(".enteremail").value;

  //When email input is wrong
  const emailError = document.querySelector(".error-email");

  //Submit control
  const submitControl = document.querySelector(".section-info1");

  //Check email input
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailCheck = emailValue.match(regex);

  if (emailCheck) {
    sectionInfo.style.display = "block";
    submitControl.style.display = "none";
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML =
      "VUI LÒNG NHẬP ĐÚNG ĐỊNH DẠNG EMAIL, ví dụ: camtu@funix.edu.vn";
  }
}

//View more - View less
//Display Viewmore btn
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".viewmore");
  viewMore.style.display = "inline-block";
}

//None display Viewmore btn
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".viewmore");
  viewMore.style.display = "none";
}

//Click on Viewmore btn
function handleViewMore(element) {
  const parentElement = element.closest(".section");
  const viewContent = parentElement.querySelectorAll(".section-content");
  viewContent.forEach((element) => {
    element.style.display = "block";
  });
  parentElement.style.height = "480px";

  const viewLess = parentElement.querySelector(".viewless");
  viewLess.style.display = "block";
  const viewMore = element.querySelector(".viewmore");
  viewMore.classlist.add("hidden");
}

//Click on Viewless btn
function handleViewLess(element) {
  const parentElement = element.closest(".section");
  const viewContent = parentElement.querySelectorAll(".section-content");
  viewContent.forEach((element) => {
    element.style.display = "none";
  });

  const viewLess = parentElement.querySelector(".viewless");
  viewLess.style.display = "none";

  parentElement.style.height = "140px";
}
