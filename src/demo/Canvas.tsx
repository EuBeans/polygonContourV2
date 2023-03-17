//canvas for the lines

import React from 'react';
//import kanvas from 'react-konva';
import { Stage, Layer, Line } from 'react-konva';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Dot from './Dot';
import {styles} from './style';
import generatePolygon from '../algorithm/generatePolygon';
import offsetPolygon from '../algorithm/PolygonContour';


interface CanvasProps {

    
}


//list of points
const listPoint = [
    { x: 313, y: 123 },
    { x:
        113.00034909068006,
        y
        : 
        261.9684210526316},
    { x: 295,y: 187 },
    { x: 120, y: 56 },
    { x: 220, y:76 }
]

const Canvas = (props: CanvasProps) => {
    //width = 20 % of the screen
    //height = 50 % of the screen

    const width = window.innerWidth * 0.5;
    const [widthCanvas, setWidth] = React.useState(width);

    const height = window.innerHeight * 0.5;
    const [heightCanvas, setHeight] = React.useState(height);

    const PADDING: number = 10;
    const MARGIN: number = 10;
    const ARCSEGMENTS: number = 20;

    //const  listPoint = generatePolygon(5, r, center);
    const [points, setPoints] = React.useState(listPoint);

    const p1 = offsetPolygon(listPoint, -PADDING, ARCSEGMENTS);
    const p2 = offsetPolygon(listPoint, MARGIN, ARCSEGMENTS);

    const [polygon1, setPolygon1] = React.useState(p1);
    const [polygon2, setPolygon2] = React.useState(p2);
    const [update, setUpdate] = React.useState(0);


    React.useEffect(() => {
        window.addEventListener('resize', () => {
            const width = window.innerWidth * 0.5;
            setWidth(width);
            const height = window.innerHeight * 0.5;
            setHeight(height);
        });
        
    }, [widthCanvas,heightCanvas]);
    

    const updatePoint = (id: number, x: number, y: number) => {        
        
        const newPoints = points.map((point, index) => {
            if (index === id) {
                console.log("index", index, "id", id, "x", x, "y", y)
                return { x, y }
            }
            return point;
        });
        const newPolygon1 = offsetPolygon(newPoints, -PADDING, ARCSEGMENTS);
        const newPolygon2 = offsetPolygon(newPoints, MARGIN, ARCSEGMENTS);
        setPolygon1(newPolygon1);
        setPolygon2(newPolygon2);
        setPoints(newPoints);
        setUpdate(update + 1);
    } 

    return (
        <Box sx={styles.container}>
            <Box  sx={styles.canvas}>
                <Stage  width={widthCanvas} height={heightCanvas}>
                    <Layer>
                        {points.map((point, index) => {
                            return (
                                <Dot 
                                    key={index} 
                                    x={point.x} 
                                    y={point.y} 
                                    id={index} 
                                    updatePoint={updatePoint}
                                />
                            )
                        })}
                    </Layer>
                    <Layer>
                        {points.map((point, index) => {
                            return (
                                <Line
                                    key={index}
                                    points={[point.x, point.y, points[index + 1]?.x, points[index + 1]?.y]}
                                    stroke={styles.line.color}
                                    strokeWidth={1}
                                />
                            )
                        })
                        }

                        {polygon1.map((point, index) => {
                            return (
                                <Line
                                    key={index}
                                    points={[point.x, point.y, polygon1[index + 1]?.x, polygon1[index + 1]?.y]}
                                    stroke={styles.offsetLine.color2}
                                    strokeWidth={1}
                                />
                            )
                        })
                        }
                        {polygon2.map((point, index) => {
                            return (
                                <Line 
                                    key= {index}
                                    points={[point.x, point.y, polygon2[index + 1]?.x, polygon2[index + 1]?.y]}
                                    stroke={styles.offsetLine.color}
                                    strokeWidth={1}
                                />
                            )
                        })
                        }
                    </Layer>
                 
                </Stage>
            </Box>
        </Box>
    );

}


export default Canvas
