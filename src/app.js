async function addSticky() {
  const stickyNote = await miro.board.createStickyNote({
    content: 'Hello, World!',
  });

  await miro.board.viewport.zoomTo(stickyNote);
}
async function addStar() {
  const shape = await miro.board.createShape({
    content: "<p>This is a very yellow star shape.</p>",
    shape: "star",
    style: {
        fillColor: "#FEFF45",
    },
    x: 3000,
    y: 4500,
    width: 280,
    height: 280,
});
}


addSticky();
addStar();