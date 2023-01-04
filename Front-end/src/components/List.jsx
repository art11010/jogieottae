import React from 'react';
import { Title } from './Atom';

// List
import Category from './List/Category';
import Place from './List/Place';
import Room from './List/Room';

// style
import tw from 'tailwind-styled-components';
export const UlCss = tw.ul`
  mt-2
  grid
  grid-cols-4
  gap-4
`;

function List(props) {
  const { title, type } = props;
  let ListEl;

  if (type == 'category') ListEl = <Category />;
  else if (type == 'place') ListEl = <Place />;
  else if (type == 'room') ListEl = <Room />;

  return (
    <>
      <Title addclass="mt-20" text={title} />
      <UlCss>{ListEl}</UlCss>
    </>
  );
}

export default List;
