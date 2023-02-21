document.querySelectorAll(".question").forEach((quest) => {
  const accordin = quest.firstElementChild;

  accordin.addEventListener("click", function () {
    const panel = this.nextElementSibling;

    if (this.classList.contains("active")) {
      // if active close
      this.classList.remove("active");
      panel.style.maxHeight = null;
    } else {
      // close all panels
      document.querySelectorAll(".accordin").forEach((ele) => {
        if (ele.classList.contains("active")) {
          ele.classList.remove("active");
          const panel = ele.nextElementSibling;
          panel.style.maxHeight = null;
        }
      });
      // open current one
      this.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
