import './AppInfoModal.css';

export default function AppInfoModal() {
  //handle closing of the "modal"
  function closeAppInfoModal() {
    document.querySelector('.app-info-modal').classList.add('hidden');
  }

  return (
    <div className="app-info-modal">
      <h1>APP INFO GOES HERE!</h1>
      <button onClick={closeAppInfoModal}>OK</button>
    </div>
  );
}
