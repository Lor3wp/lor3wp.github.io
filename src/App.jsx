//import 'bootstrap/dist/js/bootstrap.bundle.min'; // TODO: What exactly does this do?

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/rent-info" element={<RentInfoPage />} />
      <Route path="/rent-successful" element={<SuccessfulRentalPage />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
