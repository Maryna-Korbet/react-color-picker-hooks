import ColorPicker from "components/ColorPicker/ColorPicker";

export const App = () => {

  const colorPickerOptions = 
  [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
    { label: 'yellow', color: '#FFFF00' },
  ]
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ColorPicker
        options={colorPickerOptions}
      />
    </div>
  );
};
