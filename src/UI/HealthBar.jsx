import React from "react";
import styled from "styled-components";


const HealthBoxStyle = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  height: 20px;
  width: 300px;

  border: 2px solid white;
  background-color: gray;
`;

const HealthBarStyle = styled.div`
  height: 100%;
  background-color: gold;
`;

const HealthBar = () => {
  return (
    <HealthBoxStyle>
      <HealthBarStyle id="player_hp" />
    </HealthBoxStyle>
  );
};

export default HealthBar;
