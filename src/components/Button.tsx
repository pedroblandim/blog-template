import ButtonMui from '@mui/material/Button';
import { css } from 'styled-components';
import { styled } from '@mui/system';

type Props = {
  marginTop?: string;
  borderBottom?: string;
}

export const Button = styled(ButtonMui)<Props>`
  margin-top: ${(props:Props) => props.marginTop || '0px'};
  
  border: 2px solid transparent;
  border-radius: 0;

  ${(props:Props) => props.borderBottom && css`
    border-bottom: 2px solid ${props.borderBottom};
  `}
`;
