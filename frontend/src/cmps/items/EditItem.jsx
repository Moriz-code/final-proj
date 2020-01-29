import React from 'react';

export default function EditItem(props) {


  const { item } = props

  return <React.Fragment>
    <div className="edit-item container">

      <div className="img">
        <img src={item.imgs[0]} />
      </div>

      <div className="details">

        <div class="form-group">
          <input required="required" type="text" name="title" value={item.title} onChange={props.handleFormChange} />
          <label for="input" class="control-label">Title</label><i class="bar"></i>
        </div>


        <div class="form-group">
          <input required="required" type="text" name="description" value={item.description} onChange={props.handleFormChange} />
          <label for="input" class="control-label">Description</label><i class="bar"></i>
        </div>

        <div className="price-size">
          <div class="form-group">
            <input required="required" type="number" name="price" value={item.price} onChange={props.handleFormChange} />
            <label for="input" class="control-label">$ Price</label><i class="bar"></i>
          </div>

          <div class="form-group size">
            <select type="text" name="size" value={item.size} onChange={props.handleFormChange}>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
            </select>
            <label for="select" class="control-label">Size</label><i class="bar"></i>
          </div>

          <div class="form-radio gender" onChange={props.handleFormChange}>

            <div class="radio" >
              <label>
                <input type="radio" name="gender" value="female" checked={item.gender === 'female' ? 'checked' : ''} /><i class="helper"></i>Female
           </label>
            </div>

            <div class="radio">
              <label>
                <input type="radio" name="gender" value="male" checked={item.gender === 'male' ? 'checked' : ''} /><i class="helper"></i>Male
        </label>
            </div>

            <div class="radio">
              <label>
                <input type="radio" name="gender" value="unisex" checked={item.gender === 'unisex' ? 'checked' : ''} /><i class="helper"></i>Unisex
        </label>

            </div>
          </div>

        </div>


        <div class="form-group">
          <input required="required" type="text" name="sizeFit" value={item.sizeFit} onChange={props.handleFormChange} />
          <label for="input" class="control-label">Size and Fit</label><i class="bar"></i>
        </div>

        <div class="form-group">
          <input name="imgs" id="0" onChange={props.handleFormChange} type="file" />
          <input name="imgs" id="1" onChange={props.handleFormChange} type="file" />
          <input name="imgs" id="2" onChange={props.handleFormChange} type="file" />
          <label for="input" class="control-label">Images</label>

        </div>

        <div className="form-labels" onChange={props.handleFormChange}>

          <div class="checkbox">

            <label>
              <input type="checkbox" name="labels" value="summer" checked={item.labels.includes('summer') ? 'checked' : null} /><i class="helper"></i>Summer
      </label>
            <label>
              <input type="checkbox" name="labels" value="winter" checked={item.labels.includes('winter') ? 'checked' : null} /><i class="helper"></i>Winter
      </label>
            <label>
              <input type="checkbox" name="labels" value="colorful" checked={item.labels.includes('colorful') ? 'checked' : null} /><i class="helper"></i>Colorful
      </label>
            <label>
              <input type="checkbox" name="labels" value="hipster" checked={item.labels.includes('hipster') ? 'checked' : null} /><i class="helper"></i>Hipster
      </label>
            <label>
              <input type="checkbox" name="labels" value="dark" checked={item.labels.includes('dark') ? 'checked' : null} /><i class="helper"></i>Dark
      </label>
            <label>
              <input type="checkbox" name="labels" value="daily" checked={item.labels.includes('daily') ? 'checked' : null} /><i class="helper"></i>Daily
      </label>
            <label>
              <input type="checkbox" name="labels" value="boho" checked={item.labels.includes('boho') ? 'checked' : null} /><i class="helper"></i>Boho
      </label>
            <label>
              <input type="checkbox" name="labels" value="minimal" checked={item.labels.includes('minimal') ? 'checked' : null} /><i class="helper"></i>Minimal
      </label>
          </div>


        </div>

        <div className="form-group save-item" onClick={props.onSaveItem}>
          <button className="save-item">Save Item</button>
        </div>

      </div>

      <br></br>
    </div>

  </React.Fragment>
}

