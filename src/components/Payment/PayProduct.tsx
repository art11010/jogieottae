import React from 'react';
import { Button, IconX } from '../Atom';
import PayPopup from './PayPopup';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { delCartList } from '../../api/cart';

interface Props {
  payList: {
    orderItemList: [
      {
        orderItemId: number;
        name: string;
        price: number;
        pictureUrl: string;
        persons: number;
        startAt: string;
        salePrice: number;
        endAt: string;
      }
    ];
    totalPrice: number;
  };
  cart?: boolean;
  coupon?: number;
}

function PayProduct(props: Props) {
  const client = useQueryClient();
  const { payList, cart } = props;

  const { mutate: cartdelList, isLoading: cartdelLoading } = useMutation(
    delCartList,
    {
      onSuccess: () => {
        client.invalidateQueries(['cartGet']);
      },
    }
  );
  function cartdelListFn(e: number) {
    cartdelList(e);
  }

  if (cartdelLoading) return <React.Fragment>Loading...</React.Fragment>;

  const payListMap = payList.orderItemList.map((item, idx) => {
    return (
      <div
        key={item.name + idx}
        className="flex flex-wrap relative items-start py-5 border-t border-gray-400"
      >
        {cart && (
          <Button
            addClass="btn-circle btn-ghost absolute top-2 right-0"
            onClick={() => {
              cartdelListFn(item.orderItemId);
            }}
          >
            <IconX />
          </Button>
        )}
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-34846249/original/4fe9caaa-95b2-4113-b283-5fdfb0d9f2c0.jpeg?im_w=720"
          alt=""
          className="w-52 rounded-xl"
        />
        <div className="ml-5 flex-grow">
          <h5 className="mb-2 text-xl font-bold">{item.name}</h5>
          <ul>
            <li>
              {`${item.startAt.replaceAll('-', '.').replace('T', ' ')} ~ 
                ${item.endAt.replaceAll('-', '.').replace('T', ' ')}`}
            </li>
            <li>{item.persons}명</li>
          </ul>
          <div className="mt-3">
            <p>
              {!cart && item.salePrice !== 0 && (
                <>
                  <span className="line-through mr-2 font-normal text-base">
                    {item.price + item.salePrice}원
                  </span>
                </>
              )}
              <strong className="text-lg">{item.price}</strong>원
            </p>
            {!cart && (
              <>
                <PayPopup listIdx={idx} orderItemId={item.orderItemId} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  });

  return <>{payListMap}</>;
}

export default PayProduct;
