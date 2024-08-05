function AddToDo() {
  return (
    <>
      <div class="row rc-rows">
        <div class="col-6">
          <input type="text" placeholder="Enter work" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success rc-btns">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToDo;
