function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.player = -1;
  this.clicked = false;
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
  if (this.player == 0) {
    fill(127);
    ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
  } else if (this.player == 1){
    fill(200);
    line(this.x, this.y, this.x + this.w, this.y + this.w);
    line(this.x + this.w, this.y, this.x, this.y + this.w);
  }
}

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.clickCell = function(player) {
  if (!this.clicked) {
    console.log('click');
    this.clicked = true;
    this.player = player;
    return true;
  }
  return false;
}