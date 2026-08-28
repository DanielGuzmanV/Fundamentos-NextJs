import { FileCode, Folder } from "lucide-react";
interface FileNode {
  name: string;
  type: "folder" | "file" | "special";
  description: string;
  children?: FileNode[];
}

interface Props {
  node: FileNode;
  selectedNode: FileNode;
  setSelectedNode: (node: FileNode) => void;
  depth?: number;
}

export const RenderTree = ({node, selectedNode, setSelectedNode, depth = 0}: Props) => {
  const isSelected = selectedNode.name === node.name;

  return (
    <div key={node.name} style={{ paddingLeft: `${depth * 14}px` }}>
      <button
        onClick={() => setSelectedNode(node)}
        className={`w-full text-left py-1.5 px-2 cursor-pointer rounded-md font-mono text-xs flex items-center gap-2 transition-colors ${
          isSelected
            ? "bg-primary/15 text-primary font-semibold"
            : "hover:bg-gray-300/60 text-muted-foreground"
        }`}
      >
        {node.type === "folder" ? (
          <Folder className="h-4 w-4 text-amber-500 fill-amber-500/20 shrink-0" />
        ) : (
          <FileCode
            className={`h-4 w-4 shrink-0 ${
              node.type === "special" ? "text-primary" : "text-blue-500"
            }`}
          />
        )}
        <span>{node.name}</span>
      </button>

      {node.children && (
        <div className="space-y-0.5">
          {node.children.map((child) => (
            <RenderTree
              key={child.name}
              node={child}
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};