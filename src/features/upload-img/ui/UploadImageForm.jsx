import { useEffect, useState } from 'react';

export function UploadImageForm() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // 1. 파일 선택 시 처리 함수 (공통 로직)
  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    // 이미지 파일인지 확인 (유효성 검사)
    if (!selectedFile.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    setFile(selectedFile);

    // 2. 미리보기 URL 생성 (핵심: URL.createObjectURL)
    // 브라우저 메모리에 임시 URL을 만듭니다.
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  };

  // 3. Input 태그로 변경 시
  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  // 4. 드래그 앤 드롭 이벤트 핸들러
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    // 중요: 이 부분이 없으면 브라우저가 파일을 새 탭에서 열어버립니다.
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    // 드래그된 파일 가져오기
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      handleFile(droppedFiles[0]);
    }
  };

  // 5. 메모리 누수 방지 (Cleanup)
  // 컴포넌트가 언마운트되거나 이미지가 바뀌면 임시 URL을 해제해줘야 합니다.
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="p-4">
      {/* 드래그 앤 드롭 영역 */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: `2px dashed ${isDragging ? '#3b82f6' : '#ccc'}`,
          backgroundColor: isDragging ? '#eff6ff' : '#fafafa',
          padding: '40px',
          textAlign: 'center',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
      >
        <p>
          여기에 이미지를 드래그하거나 <br />
          <label htmlFor="fileInput" style={{ color: '#3b82f6', cursor: 'pointer', fontWeight: 'bold' }}>
            클릭하여 선택
          </label>
          하세요.
        </p>

        {/* 실제 파일 Input은 숨김 처리 */}
        <input id="fileInput" type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
      </div>

      {/* 미리보기 영역 */}
      {preview && (
        <div style={{ marginTop: '20px' }}>
          <h4>미리보기:</h4>
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: '300px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          />
          <p style={{ fontSize: '12px', color: '#666' }}>
            파일명: {file.name} ({(file.size / 1024).toFixed(1)} KB)
          </p>
        </div>
      )}
    </div>
  );
}
