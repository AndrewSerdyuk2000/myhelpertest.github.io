import styled from 'styled-components'

export const FlexContainer = styled.div<{
  position?: string
  top?: string
  right?: string
  column?: boolean
  margin?: string
  padding?: string
  cursor?: 'pointer' | 'auto'
  isWrap?: boolean
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  border?: string
  borderRadius?: string
  overflow?: string
  hoverOpacity?: number
}>`
  position: ${({ position }) => position || 'static'};
  top: ${({ top }) => top || 'auto'};
  right: ${({ right }) => right || 'auto'};
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  cursor: ${({ cursor }) => cursor || 'auto'};
  flex-wrap: ${({ isWrap }) => (isWrap ? 'wrap' : 'no-wrap')};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  color: ${({ color }) => color || '#000'};
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  overflow: ${({ overflow }) => overflow || 'visible'};

  &:hover {
    opacity: ${({ hoverOpacity }) => hoverOpacity || 1};
  }
`
