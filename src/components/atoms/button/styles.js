import styled from 'styled-components';

export const MainButton = styled.button`
  background: transparent;
  -webkit-appearance: none;
  border: 1px solid black;
  outline: 0;
  display: block;
  font-size: 0.7em;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: ${(props) => (
    (props.theme === 'rounded' ? '6px' : '0px')
  )};
  cursor: pointer;
  position: relative;
  &[disabled] {
    opacity: .6;
    background: #ccc;
    border: 1px solid #666;
  };
  padding: ${(props) => (
    ((props.size === 'medium') && '1.1em 1.3em;')
    || ((props.size === 'small') && '0.5em 1em;')
    || ((props.size === 'large') && '1.7em 2.4em;')
    || ((props.size === 'default') && '0.8em 1.7em;')
  )};
`;
