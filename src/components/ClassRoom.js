import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px;
  border: 2px dashed gray;
`;

const ClassRoom = props => {
  return (
    <StyledDiv>
      <h3>{`Welcome to class: ${props.className}`}</h3>
      {props.children}
    </StyledDiv>
  );
};

ClassRoom.propTypes = {
  className: PropTypes.array,
  children: PropTypes.any
};

export default ClassRoom;
