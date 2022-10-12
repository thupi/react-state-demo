interface ListScreenItemProps<T extends Record<string, any>> {
  item: T;
}
const ListScreenItem = <T extends Record<string, any>>(
  props: ListScreenItemProps<T>
) => {
  return <li>{JSON.stringify(props.item)}</li>;
};

interface ListScreenProps<T extends Record<string, any>> {
  data: T[];
}
export const ListScreen = <T extends Record<string, any>>(
  props: ListScreenProps<T>
) => {
  return (
    <ul>
      {props.data.map((item, i) => (
        <ListScreenItem item={item} />
      ))}
    </ul>
  );
};
