const canvas = document.getElementById('gl-canvas');
const gl = canvas.getContext('webgl2');

const vertexSource = ` 
  attribute vec2 aPosition;
  varying vec2 vUV;

  void main() {
    vUV = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`; // PLACEHOLDER DATA, REMEMBER TO CHANGE

const fragmentSource = `
  precision highp float;
  uniform sampler2D uPage;
  varying vec2 vUV;

  void main() {
  vec4 color = texture2D(uPage, vUV);
  color.r = 1.0;
  gl_FragColor = color;
  }
`; //PLACEHOLDER DATA REMEMBER TO CHANGE

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexSource);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentSource);
gl.compileShader(fragmentShader);

const program = gl.createProgram()
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);
gl.activeTexture(gl.TEXTURE0);
gl.uniform1i(gl.getUniformLocation(program, 'uPage'), 0);



let snap;
await takeSnap()     //initialize the snap

const tex = gl.createTexture(); //initialize the texture
gl.bindTexture(gl.TEXTURE_2D, tex); //bind the texture, remember the cd player analogy
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, snap); //upload the image to the texture in the gpu

// --- TRIANGLE SETUP --- //

const vertices = new Float32Array([ // thwse are the two triangles that cover the screen because we cant use quads
    // TRIANGLE 1 (bottom right triangle)
     1, -1, // bottom right
    -1, -1, // bottom left
     1,  1, // top right
     // TRIANGLE 2 (top left)
     -1,  1, // top left
     -1, -1, // bottom left
      1,  1, // top right
])

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); /// like bindTexture but they both bind independently
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW); // writes the data to the bound buffer

const aPosition = gl.getAttribLocation(program, 'aPosition'); // aPosition is a variable (attribute) in the glsl that we need to change
gl.enableVertexAttribArray(aPosition); // it represents the current vertex being processed
gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0); // each time the shader runs, it runs once per vertex (remember theres 6, 3 for each triangle), so we feed the shader each vertex and its location using the array we made earlier

setInterval(takeSnap, 100);
frame();


function frame(){
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, snap);
    gl.drawArrays(gl.TRIANGLES, 0, 6)
    requestAnimationFrame(frame);
}

async function takeSnap(){
    snap = await html2canvas(document.body, {
        ignoreElements: (el) => el.id === 'gl-canvas'
    });
}