import { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 0px 16px;
  font-size: 18px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      padding: 8px 0;
      display: block;
      width: 100%;
      height: 72px;
      font-size: 18px;
      background: none;
      border: none;
    }
  }
`;
type Props = {
  value: string;
  onChange: (note: string) => void;
};

const NoteSection: React.FC<Props> = (props) => {
  // const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          ref={refInput}
          defaultValue={props.value}
          onBlur={onBlur}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder="添加备注"
        />
      </label>
    </Wrapper>
  );
};

export { NoteSection };