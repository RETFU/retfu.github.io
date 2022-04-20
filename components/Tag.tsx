import styled from 'styled-components';

type StyledTagProps = {
  readonly level: Tag['level'];
};
const StyledTag = styled.span<StyledTagProps>`
  display: inline-block;
  padding: 8px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  margin: 4px;
  font-weight: 400;
  font-size: ${(props) => {
    switch (props.level) {
      case 1:
        return '0.5em';
      case 2:
        return '0.6em';
      case 3:
        return '0.7em';
      case 4:
        return '0.8em';
      default:
      case 5:
        return '0.9em';
    }
  }};
  background-color: ${(props) => {
    switch (props.level) {
      case 1:
        return '#80e1ff';
      case 2:
        return '#6ed1ff';
      case 3:
        return '#5ec1ff';
      case 4:
        return '#5cb0f9';
      default:
      case 5:
        return '#0a8bfd';
    }
  }};
`;

type TagProps = {
  readonly tag: Tag;
};
const Tag = ({ tag }: TagProps) => (
  <StyledTag level={tag.level}>{tag.name}</StyledTag>
);

export type Tag = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export default Tag;
