drawGrid = (paper, grid, offset, points)=>{
        let array = []
        let i = 0
        while(i<grid[0]) {
                let arr = []
                let j = 0
                while(j<grid[1]) {
                        var path = new paper.Path.Circle(new paper.Point(2*i*points+offset[0], 2*j*points+offset[1]), points - 7);
                        path.style = {
                            fillColor: new paper.Color(1, 0, 0),
                            strokeColor: 'black',
                            strokeWidth: 1
                        };
                        arr.push(path)
                        j++
                }
                array.push(arr)
                i++
        }
        return array
}
forFirst = (grid, el, call)=>{
        let i = 0
        while(i<el) {
                call(grid[i%grid.length][0])
                i++
        }
}
window.addEventListener('resize', ()=>{
        let canavas = document.getElementById("canvas")
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
})
window.onload = ()=>{
        let canavas = document.getElementById("canvas")
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        let scope = new paper.PaperScope()
        scope.setup(canvas)

        let grid = drawGrid(paper, [47, 23], [160, 100], 16)
        
        forFirst(grid, 420, (el)=>{
                el.style = {
                        fillColor: "black",
                }
        })

        setInterval(()=>{
                grid.forEach((x)=>{
                        x.forEach((y)=>{
                                y.radius = 16 - 7
                        })
                })
        },170)
        
        setInterval(()=>{
                grid.forEach((x)=>{
                        x.forEach((y)=>{
                                y.radius = 16 - 4
                        })
                })
        },420)
        
        setInterval(()=>{
                grid.forEach((x)=>{
                        x.forEach((y)=>{
                                y.style.strokeWidth = 4;
                        })
                })
        }, 777)
        
        setInterval(()=>{
                grid.forEach((x)=>{
                        x.forEach((y)=>{
                                y.style.strokeWidth = 3;
                        })
                })
        }, 1337)
        
        
        setInterval(()=>{
                grid.forEach((x)=>{
                        x.forEach((y)=>{
                                y.style.strokeColor = 'black';
                        })
                })
        }, 666)
        
        setInterval(()=>{
                grid.forEach((x)=>{
                        x.forEach((y)=>{
                                y.style.strokeColor = 'yellow';
                        })
                })
        }, 870)
        
        setInterval(()=>{
                grid.forEach((x)=>{
                        x.forEach((y)=>{
                                y.style.fillColor = 'green';
                        })
                })
        }, 999)        
        
        
        setInterval(()=>{
                grid.forEach((x)=>{
                        x.forEach((y)=>{
                                y.style.fillColor = 'red';
                        })
                })
        }, 888)
        
        var text = new paper.PointText({
            point: [50, 50],
            content: 'The contents of the point text',
            fillColor: 'black',
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 25
        });

        console.log(grid)
}


