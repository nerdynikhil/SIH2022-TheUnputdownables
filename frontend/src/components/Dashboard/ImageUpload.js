import { DownloadOutlined, InboxOutlined } from '@ant-design/icons'
import { Button, message, Typography } from 'antd';
import Dragger from 'antd/lib/upload/Dragger'
import React from 'react'

const ImageUpload = ({ setIsMultipleUpload }) => {
    const config = {
        name: 'file',
        multiple: true,
        style: { background: "#5fa1ff4a", padding: "60px", border: "1px dashed #0c0c0c" },
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <div className='card flex' style={{ padding: "30px 40px" }}>
            <div className='card'>
                <h2>Upload Image</h2>
                <div className='flex' style={{ margin: "15px 0" }}>
                    <Dragger {...config}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>
                </div>
                <div style={{ margin: "20px 0" }}>
                    <Button type='danger' size='large' onClick={() => setIsMultipleUpload(false)}>
                        Cancel
                    </Button>
                    <Button type='primary' size='large' style={{ marginLeft: "10px" }}>
                        Continue
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default ImageUpload