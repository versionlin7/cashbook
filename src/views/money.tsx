import Layout from 'components/layout';
import { CategorySection } from './money/categorySection';
import { NotesSection } from './money/notesSection';
import { NumberSection } from './money/numberSection';
import { TagsSection } from './money/tagsSection';

function Money() {
  return (
    <Layout>
      <TagsSection />
      <NotesSection>
        <label>
          <span>备注</span>
          <textarea placeholder="添加备注" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberSection>
        <div className="output">100</div>
        <div className="pad">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-delete"></use>
            </svg>
          </button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>AC</button>

          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">=</button>
          <button className="zero">0</button>
          <button>.</button>
          {/* <button>×</button> */}

          {/* <button>-</button> */}

          {/* <button>+</button> */}
        </div>
      </NumberSection>
    </Layout>
  );
}

export default Money;
