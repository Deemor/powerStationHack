const SQUARE = {
  0 : ``, 
  1 : `<svg width="116" height="116"><rect  fill="#686573" width="6" height="116" x="55" y="0"/></svg> `, 
  2 : `<svg width="116" height="116"><rect  fill="#686573" width="116" height="6" x="0" y="55"/></svg> `, 
  3 : `<svg width="116" height="116"><rect  fill="#686573" width="55" height="6" x="0" y="55"/><rect  fill="#686573" width="6" height="61" x="55" y="55"/></svg>`,
  4 : `<svg width="116" height="116"><rect  fill="#686573" width="55" height="6" x="0" y="55"/><rect  fill="#686573" width="6" height="61" x="55" y="0"/></svg>`,
  5 : `<svg width="116" height="116"><rect  fill="#686573" width="55" height="6" x="61" y="55"/><rect  fill="#686573" width="6" height="61" x="55" y="55"/></svg>`,
  6 : `<svg width="116" height="116"><rect  fill="#686573" width="55" height="6" x="61" y="55"/><rect  fill="#686573" width="6" height="61" x="55" y="0" /></svg>`,
}
const SQUARE_ACTIVE = {
  0 : ``, 
  1 : `<svg width="116" height="116"><rect  fill="#dac0f8" width="6" height="116" x="55" y="0" class="shadow"/></svg> `, 
  2 : `<svg width="116" height="116"><rect  fill="#dac0f8" width="116" height="6" x="0" y="55" class="shadow"/></svg> `, 
  3 : `<svg width="116" height="116"><rect  fill="#dac0f8" width="55" height="6" x="0" y="55" class="shadow"/><rect  fill="#dac0f8" width="6" height="61" x="55" y="55" class="shadow"/></svg>`,
  4 : `<svg width="116" height="116"><rect  fill="#dac0f8" width="55" height="6" x="0" y="55" class="shadow"/><rect  fill="#dac0f8" width="6" height="61" x="55" y="0" class="shadow"/></svg>`,
  5 : `<svg width="116" height="116"><rect  fill="#dac0f8" width="55" height="6" x="61" y="55" class="shadow"/><rect  fill="#dac0f8" width="6" height="61" x="55" y="55" class="shadow"/></svg>`,
  6 : `<svg width="116" height="116"><rect  fill="#dac0f8" width="55" height="6" x="61" y="55" class="shadow"/><rect  fill="#dac0f8" width="6" height="61" x="55" y="0" class="shadow"/></svg>`,
}
const STRAIGHT = [
  `<svg width="116" height="116"><rect  fill="#686573" width="6" height="116" x="55" y="0"/></svg> `, 
  `<svg width="116" height="116"><rect  fill="#686573" width="116" height="6" x="0" y="55"/></svg> ` 
]
const STRAIGHT_ACTIVE = [
  `<svg width="116" height="116"><rect  fill="#dac0f8" width="6" height="116" x="55" y="0" class="shadow"/></svg> `, 
  `<svg width="116" height="116"><rect  fill="#dac0f8" width="116" height="6" x="0" y="55" class="shadow"/></svg> `
]
const STRAIGHT_CONNECTIONS = [
  [[-1,0],[1,0]],
  [[0,-1],[0,1]]
]
const ANGLE = [
  `<svg width="116" height="116"><rect  fill="#686573" width="55" height="6" x="61" y="55"/><rect  fill="#686573" width="6" height="61" x="55" y="55"/></svg>`,//\/>
  `<svg width="116" height="116"><rect  fill="#686573" width="55" height="6" x="0" y="55"/><rect  fill="#686573" width="6" height="61" x="55" y="55"/></svg>`,//<\/
  `<svg width="116" height="116"><rect  fill="#686573" width="55" height="6" x="0" y="55"/><rect  fill="#686573" width="6" height="61" x="55" y="0"/></svg>`,//<^
  `<svg width="116" height="116"><rect  fill="#686573" width="55" height="6" x="61" y="55"/><rect  fill="#686573" width="6" height="61" x="55" y="0" /></svg>`//^>

]
const ANGLE_ACTIVE = [
  `<svg width="116" height="116"><rect  fill="#dac0f8" width="55" height="6" x="61" y="55" class="shadow"/><rect  fill="#dac0f8" width="6" height="61" x="55" y="55" class="shadow"/></svg>`,
  `<svg width="116" height="116"><rect  fill="#dac0f8" width="55" height="6" x="0" y="55" class="shadow"/><rect  fill="#dac0f8" width="6" height="61" x="55" y="55" class="shadow"/></svg>`,
  `<svg width="116" height="116"><rect  fill="#dac0f8" width="55" height="6" x="0" y="55" class="shadow"/><rect  fill="#dac0f8" width="6" height="61" x="55" y="0" class="shadow"/></svg>`,
  `<svg width="116" height="116"><rect  fill="#dac0f8" width="55" height="6" x="61" y="55" class="shadow"/><rect  fill="#dac0f8" width="6" height="61" x="55" y="0" class="shadow"/></svg>`
]

const ANGLE_CONENCTIONS = [
  [[0,1],[1,0]],
  [[0,-1],[1,0]],
  [[0,-1],[-1,0]],
  [[0,1],[-1,0]]

]
const EXIT = [
  ""
]
const EXIT_ACTIVE = [
  `<svg width="116" height="116"><rect  fill="#dac0f8" width="116" height="116" x="0" y="0" class="shadow"/></svg> `
]
const EXIT_CONNECTIONS = [
  [[-1,0],[0,-1]]
]
// var mazeNumbers = [
//   [1,0,1,1,0,1,0,1],
//   [1,0,1,0,0,1,1,0],
//   [0,1,0,1,0,1,0,1],
//   [1,0,1,1,0,0,0,0]
// ]

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max))
const delay = t => new Promise(res => setTimeout(res, t * 1000));

function playSound(name, volume){
    const sound = new Audio(name)
    sound.volume = volume || 0.15;
    sound.play();     
    return sound
}
var rows = 4;
var columns = 8;
var maze;
function isInMaze(x,y)
{
  if((x >= 0 && x < rows) && (y >= 0 && y < columns))
  {
    return 1;
  }else 
  return 0;
}
class Square
{
  position = [-1,-1];
  amountOfTypes = 1;
  actualType = 0;
  active = 0;
  svg = ``;
  connections = [[0,0],[0,0]]
  constructor()
  { }
  rotate()
  { }
  onClick()
  { }
  setActive()
  { }
  setInactive()
  { }
  displayStatus()
  { }
}
class Angle extends Square
{

  constructor(x,y,type)
  {
    super();
    this.position = [x,y];
    this.amountOfTypes = 4;
    this.actualType = type;
    if(type==-1)
      this.actualType = randomInt(4);
    this.svg = ANGLE[this.actualType];
    this.connections = ANGLE_CONENCTIONS[this.actualType];
    $("#"+String(x)+String(y)).html(this.svg);
  }
  
  rotate()
  {
    playSound('audio/click.mp3');
    this.actualType = this.actualType + 1;
    if(this.actualType >= this.amountOfTypes)
    {
      this.actualType = 0;
    }
    if(this.active == 1)
    {this.svg = ANGLE_ACTIVE[this.actualType];}
    else{this.svg = ANGLE[this.actualType];}
    
    this.connections = ANGLE_CONENCTIONS[this.actualType];
    $("#"+String(this.position[0])+String(this.position[1])).html(this.svg);
  }
  onClick()
  {
    this.rotate();
  }
  async setActive(powerSupplyOrigin)
  {
    this.active = 1;
    this.svg = ANGLE_ACTIVE[this.actualType];
    $("#"+String(this.position[0])+String(this.position[1])).html(this.svg);
  }
  async setInactive()
  {
    this.active = 0;
    this.svg = ANGLE[this.actualType];
    $("#"+String(this.position[0])+String(this.position[1])).html(this.svg);
  }
  async update()
  {
    await this.setActive();
    for(var i = 0; i < this.connections.length; i++)
    {
      var neigh_x = this.position[0] + this.connections[i][0];
      var neigh_y = this.position[1] + this.connections[i][1];
      if(isInMaze(neigh_x,neigh_y) == 1)
      {
        var neigh = maze[neigh_x][neigh_y];
        if(neigh.active == 0)
        {
          for(var j = 0; j < neigh.connections.length; j++)
          {
            var neigh_neigh_x = neigh_x + neigh.connections[j][0];
            var neigh_neigh_y = neigh_y + neigh.connections[j][1];
            if(neigh_neigh_x == this.position[0] && neigh_neigh_y == this.position[1])
            {
              neigh.update();
              break;
            }
          }
        }
      }
    }
  }
}
class Straight extends Square
{

  constructor(x,y,type)
  {
    super();
    this.position = [x,y];
    this.amountOfTypes = 2;
    this.actualType = type;
    if(type == -1)
      this.actualType = randomInt(2);
    this.svg = STRAIGHT[this.actualType];
    this.connections = STRAIGHT_CONNECTIONS[this.actualType];
    $("#"+String(x)+String(y)).html(this.svg);
  }
  
  rotate()
  {
    playSound('audio/click.mp3');
    this.actualType = this.actualType + 1;
    if(this.actualType >= this.amountOfTypes)
    {
      this.actualType = 0;
    }
    if(this.active == 1)
    {this.svg = STRAIGHT_ACTIVE[this.actualType];}
    else{this.svg = STRAIGHT[this.actualType];}
    this.connections = STRAIGHT_CONNECTIONS[this.actualType];
    $("#"+String(this.position[0])+String(this.position[1])).html(this.svg);
  }
  onClick()
  {
    this.rotate();
  }
  async setActive()
  {
    this.active = 1;
    this.svg = STRAIGHT_ACTIVE[this.actualType];
    $("#"+String(this.position[0])+String(this.position[1])).html(this.svg);
  }
  async setInactive()
  {
    this.active = 0;
    this.svg = STRAIGHT[this.actualType];
    $("#"+String(this.position[0])+String(this.position[1])).html(this.svg);
  }
  async update()
  {
    await this.setActive();
    for(var i = 0; i < this.connections.length; i++)
    {
      var neigh_x = this.position[0] + this.connections[i][0];
      var neigh_y = this.position[1] + this.connections[i][1];
      if(isInMaze(neigh_x,neigh_y) == 1)
      {
        var neigh = maze[neigh_x][neigh_y];
        if(neigh.active == 0)
        {
          for(var j = 0; j < neigh.connections.length; j++)
          {
            var neigh_neigh_x = neigh_x + neigh.connections[j][0];
            var neigh_neigh_y = neigh_y + neigh.connections[j][1];
            if(neigh_neigh_x == this.position[0] && neigh_neigh_y == this.position[1])
            {
              neigh.update();
            }
          }
        }
      }
    }
  }
}
class Exit extends Square
{

  constructor(x,y)
  {
    super();
    this.position = [x,y];
    this.amountOfTypes = 1;
    this.actualType = 0;
    this.svg = EXIT[this.actualType];
    this.connections = EXIT_CONNECTIONS[this.actualType];
    $("#"+String(x)+String(y)).html(this.svg);
  }
  
  rotate()
  {
  }
  onClick()
  {
  }
  async setActive()
  {
    playSound('audio/done.mp3');
    this.active = 1;
    this.svg = EXIT_ACTIVE[this.actualType];
    $("#"+String(this.position[0])+String(this.position[1])).html(this.svg);
  }
  async setInactive()
  {
    this.active = 0;
    this.svg = EXIT[this.actualType];
    $("#"+String(this.position[0])+String(this.position[1])).html(this.svg);
  }
  async update()
  {
    await this.setActive();
  }
}
async function createMaze()
{
  maze = GenerateGrid();
  
  maze[rows-1][columns-1] = new Exit(rows-1,columns-1);
  maze[0][0].setActive();
  maze[0][0].update();
}
function squareClick(x,y)
{
  if($("#navText").html()=="POŁĄCZ KABEL")
  {
    maze[x][y].onClick();
    for(var i = 0; i < rows; i++)
    {
      for(var j = 0; j < columns; j++)
      {
        maze[i][j].setInactive();
      }
    }
    maze[0][0].update();
  }
}
function isEndActive()
{

  if (maze[rows-1][columns-1].active==1)
  {
    return 1;
  }
  return 0;
}
function setEndActive(active)
{
  maze[rows-1][columns-1].active=active;
}
async function startHack(){
  await createMaze();
  $("#navText").html("PRZYGOTUJ SIĘ");
  var progBar = $("#progress-bar");
  progBar.css("width","100%");
  progBar.animate({
    width: "0px"
  }, {
    duration: 3*1000,
    ease: "linear",
  });
  await delay(3);
  $("#progress-bar").stop(true,true);
  $("#navText").html("POŁĄCZ KABEL");
  progBar = $("#progress-bar");
  progBar.css("width","100%");
  progBar.animate({
    width: "0px"
  }, {
    duration: 40*1000,
    ease: "linear",
  });
  //next animacja 40s
  return new Promise(async (output) => {

    $('body').on('DOMSubtreeModified', '#37', function(){
      if (isEndActive()==1) {
        $("#progress-bar").stop(true,true);
        setEndActive(0);
        output(1);
      }
    });

    await delay(40)
    output(0);
  });
}
async function start()
{
  var result = await startHack();
  $('body').unbind('DOMSubtreeModified');
  if(result == 1)
  {
    $("#progress-bar").stop(true,true);
    $("#navText").html("PRZYZNANO DOSTĘP");
    progBar = $("#progress-bar");
    progBar.css("width","100%");
    progBar.animate({
      width: "0px"
    }, {
      duration: 4*1000,
      ease: "linear",
    });
    await delay(4);
  }else{
    $("#progress-bar").stop(true,true);
    $("#navText").html("NIE PRZYZNANO DOSTĘPU");
    progBar = $("#progress-bar");
    progBar.css("width","100%");
    progBar.animate({
      width: "0px"
    }, {
      duration: 4*1000,
      ease: "linear",
    });
    await delay(4);
  }
  $("#buttonDiv").show();
  $("#mainSpot").hide();
}
$("#buttonStart").on( "click", function() {
  $("#buttonDiv").hide();
  $("#mainSpot").show();
  start();
});
// ALGORYTM OD !Explooosion!#0156 DZIEKUJE BARDZO <3
const CONNECTION_UP = 0;
const CONNECTION_DOWN = 1;
const CONNECTION_LEFT = 2;
const CONNECTION_RIGHT = 3;

function getStep(row, cell, grid) {
    let steps = [];

    if(row !== 0 && grid[row -1][cell] === 0)
        steps.push(CONNECTION_UP);
    if(row !== grid.length - 1 && grid[row + 1][cell] === 0)
        steps.push(CONNECTION_DOWN);
    if(cell !== 0 && grid[row][cell -1] === 0)
        steps.push(CONNECTION_LEFT);
    if(cell !== grid[0].length - 1 && grid[row][cell + 1] === 0)
        steps.push(CONNECTION_RIGHT);

    steps = steps.filter(e => {
        if(e === CONNECTION_LEFT) {
            return row !== grid.length - 1 && row !== 0;
        }

        if(e === CONNECTION_UP) {
            return cell !== 0 && cell !== grid[0].length - 1
        }

        return true;
    });

    if(steps.length === 0) {
        return null;
    }

    const step = steps[Math.floor(Math.random() * steps.length)];
    return step;
}

function generateSteps() {
    const steps = [];
    const tempGrid = [];
    for(let i = 0; i < 4; i++) {
        const row = [];
        for(let j = 0; j < 8; j++) {
            row.push(0);
        }

        tempGrid.push(row);
    }

    tempGrid[0][0] = 1;
    let row = 0, cell = 0;
    while(row < 3 || cell < 7) {
        const step = getStep(row, cell, tempGrid);

        if(step === null) {
            return generateSteps();
        }

        if(step === CONNECTION_UP) {
            row--;
        } else if(step === CONNECTION_DOWN) {
            row++;
        } else if(step === CONNECTION_LEFT) {
            cell--;
        } else if(step === CONNECTION_RIGHT) {
            cell++;
        }
        tempGrid[row][cell] = 1;
        steps.push(step);
    }

    return steps;
}

function GenerateGrid() {
    const steps = generateSteps();
    const grid = [];
    for(let i = 0; i < 4; i++) {
        const row = [];
        for(let j = 0; j < 8; j++) {
            let type = Math.random() > 0.5 ? "corner" : "flat";
            let rotation = Math.floor(Math.random() * (type === "corner" ? 4 : 2))
            if(i === 3 && j === 7) {
                type = "corner";
                rotation = 0;
            }

            if(type === "corner") {
                row.push(new Angle(i,j,rotation));
            } else {
                row.push(new Straight(i,j,rotation));
            }
        }

        grid.push(row);
    }

    let row = 0, cell = 0;
    for(let i = 0; i < steps.length - 1; i++) {
        const step = steps[i];
        const nextStep = steps[i + 1];

        if(row === 0 && cell === 0) {
            if(step === CONNECTION_DOWN) {
                grid[row][cell] = new Straight(row,cell,0);
            } else {
                grid[row][cell] = new Angle(row,cell,3);
            }

        }

        if(step === CONNECTION_UP) {
            row--;
        } else if(step === CONNECTION_DOWN) {
            row++;
        } else if(step === CONNECTION_LEFT) {
            cell--;
        } else if(step === CONNECTION_RIGHT) {
            cell++;
        }

        if(step === nextStep) {
            grid[row][cell] = new Straight(row,cell,Math.floor(Math.random() * 2));
        } else {
            grid[row][cell] = new Angle(row,cell,Math.floor(Math.random() * 4));
        }
    }

    return grid;
}