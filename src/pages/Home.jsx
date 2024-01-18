function Home() {
  return <div>Home</div>;
}

export default Home;

export const carsLoader = async () => {
  let results = [];
  // const querySnapshot = await getDocs(collection(db, "cars"));
  // querySnapshot.forEach((doc) => {
  //   results.push({ id: doc.id, ...doc.data() });
  // });
  return results;
};
