document.getElementById("blog-btn").addEventListener("click", function () {
  location.href = "question.html";
});
document
  .getElementById("triangle-calculate")
  .addEventListener("click", function () {
    const getByBInputField = document.getElementById("TriangleB");
    const bInputFloat = parseFloat(getByBInputField.value);
    if (isNaN(bInputFloat)) {
      return alert("Please input a number");
    }
    const getByHInputField = document.getElementById("TriangleH");
    const hInputFloat = parseFloat(getByHInputField.value);
    if (isNaN(hInputFloat)) {
      return alert("Please input a number");
    }
    const triangleCalculate = (0.5 * bInputFloat * hInputFloat).toFixed(2);
    const TriangleOutput = document.getElementById("triangleOutput");
    TriangleOutput.innerHTML = `<div class="d-flex justify-content-between">
    <div>1. Triangle</div>
    <div>${triangleCalculate}cm<sup class="fw-bold">2</sup></div>
    <div><button type="button" class="btn btn-sm btn-primary">Covert to m<sup class="fw-bold">2</sup></button></div> 
    </div>`;
  });

document
  .getElementById("Rectangle-calculate")
  .addEventListener("click", function () {
    const getByWInputField = document.getElementById("Rectangle-w");
    const wInputFloat = parseFloat(getByWInputField.value);
    if (isNaN(wInputFloat)) {
      return alert("Please input a number");
    }
    const getByIInputField = document.getElementById("Rectangle-i");
    const iInputFloat = parseFloat(getByIInputField.value);
    if (isNaN(iInputFloat)) {
      return alert("Please input a number");
    }
    const rectangleCalculate = (wInputFloat * iInputFloat).toFixed(2);
    const rectangleOutput = document.getElementById("RectangleOutput");
    rectangleOutput.innerHTML = `<div class="d-flex justify-content-between">
      <div>2. Rectangle</div>
      <div>${rectangleCalculate}cm<sup class="fw-bold">2</sup></div>
      <div><button type="button" class="btn btn-sm btn-primary">Covert to m<sup class="fw-bold">2</sup></button></div> 
      </div>`;
  });

document
  .getElementById("Parallelogram-calculate")
  .addEventListener("click", function () {
    const parallelogram = ParallelogramAndEllipse(10, 12);
    const ParallelogramOutput = document.getElementById("ParallelogramOutput");
    ParallelogramOutput.innerHTML = `<div class="d-flex justify-content-between">
        <div>3. Parallelogram</div>
        <div>${parallelogram}cm<sup class="fw-bold">2</sup></div>
        <div><button type="button" class="btn btn-sm btn-primary">Covert to m<sup class="fw-bold">2</sup></button></div> 
        </div>`;
  });

document
  .getElementById("Ellipse-calculate")
  .addEventListener("click", function () {
    const ellipse = ParallelogramAndEllipse(10, 4);
    const result = parseFloat(ellipse * 3.14).toFixed(2);
    const ellipseOutput = document.getElementById("EllipseOutput");
    ellipseOutput.innerHTML = `<div class="d-flex justify-content-between">
        <div>6. Ellipse</div>
        <div>${result}cm<sup class="fw-bold">2</sup></div>
        <div><button type="button" class="btn btn-sm btn-primary">Covert to m<sup class="fw-bold">2</sup></button></div> 
        </div>`;
  });

document
  .getElementById("Rhombus-calculate")
  .addEventListener("click", function () {
    const rhombus = RhombusAndPentagon(16, 8);
    const result = parseFloat(rhombus).toFixed(2);
    const rhombusOutput = document.getElementById("RhombusOutput");
    rhombusOutput.innerHTML = `<div class="d-flex justify-content-between">
        <div>4. Rhombus</div>
        <div>${result}cm<sup class="fw-bold">2</sup></div>
        <div><button type="button" class="btn btn-sm btn-primary">Covert to m<sup class="fw-bold">2</sup></button></div> 
        </div>`;
  });

document
  .getElementById("Pentagon-calculate")
  .addEventListener("click", function () {
    const pentagon = RhombusAndPentagon(6, 10);
    const result = parseFloat(pentagon).toFixed(2);
    const pentagonOutput = document.getElementById("PentagonOutput");
    pentagonOutput.innerHTML = `<div class="d-flex justify-content-between">
        <div>5. Pentagon</div>
        <div>${result}cm<sup class="fw-bold">2</sup></div>
        <div><button type="button" class="btn btn-sm btn-primary">Covert to m<sup class="fw-bold">2</sup></button></div> 
        </div>`;
  });


