export const PreviewPane = ({ previewLoading, data = [] }) => {
    return <div className="template-preview">
        {previewLoading ? "Loading" :
            data.map(({ type, title, content }, index) =>
                <div key={index}>
                    <p className={`${type === "heading" ? 'template-preview-heading' : type === 'subheading' ? "template-preview-subheading" : "template-preview-description"}`}>{title}</p>
                    <div className='template-preview-content'>
                        {content}
                    </div>
                </div>
            )}
    </div>
}