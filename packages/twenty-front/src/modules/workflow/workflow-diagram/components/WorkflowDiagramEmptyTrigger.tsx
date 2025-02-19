import { WorkflowDiagramStepNodeBase } from '@/workflow/workflow-diagram/components/WorkflowDiagramStepNodeBase';
import { WorkflowDiagramEmptyTriggerNodeData } from '@/workflow/workflow-diagram/types/WorkflowDiagram';
import styled from '@emotion/styled';

const StyledStepNodeLabelIconContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.background.transparent.light};
  border-radius: ${({ theme }) => theme.spacing(1)};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const WorkflowDiagramEmptyTrigger = ({
  data,
}: {
  data: WorkflowDiagramEmptyTriggerNodeData;
}) => {
  return (
    <WorkflowDiagramStepNodeBase
      name="Add a Trigger"
      nodeType="trigger"
      variant="empty"
      Icon={<StyledStepNodeLabelIconContainer />}
      isLeafNode={data.isLeafNode}
    />
  );
};
