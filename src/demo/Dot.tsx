// using Konvas library draw dots for each polygon point
import React from 'react';

import {Circle } from 'react-konva';
import {styles} from './style';

interface IPoint {
    x: number;
    y: number;
    id: number;
    updatePoint: (id: number, x: number, y: number) => void;

}
const Dot = (props: IPoint) => {
    const { x, y, id, updatePoint} = props;
    const [strokeColor, setStrokeColor] = React.useState("transparent");
    const [point, setPoint] = React.useState({ x, y });


    const handleDragMove = (e: any) => {
        updatePoint(id, e.target.x(),  e.target.y() );
        setPoint({ x: e.target.x(), y: e.target.y() });
    }
        
    return (
            <Circle
                x={point.x}
                y={point.y}
                radius={3}
                fill={styles.dot.color}
                draggable
                onDragMove={(e) => handleDragMove(e)}
                style={{ cursor: "pointer" }}
                fillPatternScale={{ x: 0.5, y: 0.5 }}
                stroke={strokeColor}
                strokeWidth={15}          
                onMouseOver={() => {
                    document.body.style.cursor = 'all-scroll';
                    setStrokeColor("rgba(107, 117, 133,0.2)");
                }}
                onMouseOut={() => {
                    document.body.style.cursor = 'default';
                    setStrokeColor("transparent");
                }}
            />
    );
}

export default Dot

