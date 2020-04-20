import styled from 'styled-components';

const conf = () => {
  const width = window.innerWidth;
  let config = {
    color: 'black',
    textTransform: 'normal',
  };

  if (width <= 800) {
    config.color = 'white';
    config.textTransform = 'uppercase';
  }

  return config;
};

const AppWrapper = styled.div`
  color: ${conf().color};
  text-transform: ${conf().textTransform};
  font-style: ${props => props.variant};
`;

export default AppWrapper;