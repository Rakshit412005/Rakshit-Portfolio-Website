// components/BlurBlob.jsx
/* eslint-disable react/prop-types */

const BlurBlob = ({
  position = { top: '35%', left: '20%' },
  size = { width: '30%', height: '40%' }
}) => {
  const { top = '35%', left = '20%' } = position || {};
  const { width = '30%', height = '40%' } = size || {};

  return (
    <div
      className="absolute pointer-events-none -z-10"
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-full h-full bg-purple-600/25 rounded-full blur-[120px] animate-blob"></div>
    </div>
  );
};

export default BlurBlob;
