export const PreviewPane = ({ children, noPadding }) => {
    return <div className="template-preview" style={{ padding: noPadding ? 0 : "" }}>
        {children}
    </div>
}