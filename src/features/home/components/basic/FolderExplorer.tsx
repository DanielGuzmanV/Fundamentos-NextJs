"use client"

import { FileCode, Folder, Info } from "lucide-react"
import { RenderTree } from "./RenderTree"
import { useState } from "react";
import { FOLDER_TREE } from "../../constants/folderTree";
import { DynamicDetailPanel } from "./topics_1/DynamicDetailPanel";

interface FileNode {
  name: string;
  type: "folder" | "file" | "special";
  description: string;
  children?: FileNode[];
}

export const FolderExplorer = () => {
  const [selectedNode, setSelectedNode] = useState<FileNode>(FOLDER_TREE);

  return (
    <section className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Explorador de Arquitectura App Router
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Árbol interactivo */}
        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase border-b border-border pb-2">
            Haz clic en cualquier archivo o carpeta
          </p>
          <div className="pt-1">
            <RenderTree
              node={FOLDER_TREE}
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
            />
          </div>
        </div>

        {/* Panel informativo del elemento seleccionado */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {selectedNode.type === "folder" ? (
                <Folder className="h-5 w-5 text-amber-500 fill-amber-500/20" />
              ) : (
                <FileCode className="h-5 w-5 text-primary" />
              )}
              <h4 className="text-base font-bold font-mono">{selectedNode.name}</h4>
            </div>

            <div className="p-3 rounded-lg bg-muted/50 border border-border/50 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                Descripción
              </span>
              <p className="text-xs text-gray-900 leading-relaxed">
                {selectedNode.description}
              </p>
            </div>

            <DynamicDetailPanel activeItem={selectedNode}/>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4 border-t border-border/50">
            <Info className="h-4 w-4 text-primary shrink-0" />
            <span>Los archivos con nombre reservado controlan el ciclo de renderizado.</span>
          </div>
        </div>
      </div>
    </section>
  )
}